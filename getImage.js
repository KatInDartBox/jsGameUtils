/**
 *
 * @param {string} src
 * @param {number} [width]
 * @param {number} [height]
 * @returns { Promise<HTMLImageElement>}
 */
export const getImage = (src, width, height) => {
  return new Promise((resolve, reject) => {
    const img = width ? new Image(width, height) : new Image();
    img.src = src;
    img.onload = () => {
      resolve(img);
    };
    img.onerror = () => {
      reject(`load img error :${src}`);
    };
  });
};
