/**
 * Project the HTML engraving onto the card face in the footage.
 *
 * The card is generated blank — models garble digits every time — and all type is HTML.
 * During the two held poses the card face is a fixed quadrilateral in the frame, so the
 * engraving is laid out flat at ID-1 proportion and mapped onto those four measured
 * corners with a CSS matrix3d homography. The canvas draws frames cover-fit and centred,
 * so the corners go through the same fit before projection.
 */

type Pt = [number, number];

/** Solve the 3x3 homography mapping the four `src` points onto the four `dst` points. */
function homography(src: Pt[], dst: Pt[]): number[] {
  const A: number[][] = [];
  const b: number[] = [];
  for (let i = 0; i < 4; i++) {
    const [x, y] = src[i];
    const [u, v] = dst[i];
    A.push([x, y, 1, 0, 0, 0, -u * x, -u * y]); b.push(u);
    A.push([0, 0, 0, x, y, 1, -v * x, -v * y]); b.push(v);
  }
  // Gaussian elimination with partial pivoting on the 8x8 system.
  for (let c = 0; c < 8; c++) {
    let p = c;
    for (let r = c + 1; r < 8; r++) if (Math.abs(A[r][c]) > Math.abs(A[p][c])) p = r;
    [A[c], A[p]] = [A[p], A[c]]; [b[c], b[p]] = [b[p], b[c]];
    for (let r = c + 1; r < 8; r++) {
      const f = A[r][c] / A[c][c];
      for (let k = c; k < 8; k++) A[r][k] -= f * A[c][k];
      b[r] -= f * b[c];
    }
  }
  const h = new Array(8).fill(0);
  for (let r = 7; r >= 0; r--) {
    let s = b[r];
    for (let k = r + 1; k < 8; k++) s -= A[r][k] * h[k];
    h[r] = s / A[r][r];
  }
  return [...h, 1];
}

/** CSS matrix3d (column-major) for a homography, with transform-origin at 0 0. */
function toMatrix3d(h: number[]) {
  const [a, b, c, d, e, f, g, i, j] = h;
  return `matrix3d(${a},${d},0,${g},${b},${e},0,${i},0,0,1,0,${c},${f},0,${j})`;
}

/**
 * Place `el` (laid out at `w`×`h` CSS px) so its corners land on `corners`, given as
 * fractions of a `fw`×`fh` source frame drawn cover-fit into a `vw`×`vh` viewport.
 */
export function project(
  el: HTMLElement, w: number, h: number,
  corners: Pt[], fw: number, fh: number, vw: number, vh: number,
) {
  const s = Math.max(vw / fw, vh / fh);
  const ox = (vw - fw * s) / 2;
  const oy = (vh - fh * s) / 2;
  const dst = corners.map(([x, y]) => [ox + x * fw * s, oy + y * fh * s] as Pt);
  const H = homography([[0, 0], [w, 0], [w, h], [0, h]], dst);
  el.style.transform = toMatrix3d(H);
}
