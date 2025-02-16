export const getDominantColor = (imgEl: HTMLImageElement): string => {
  const blockSize = 10; // Sample every 10 pixels for performance
  const defaultRGB = "#000000";
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  let data: ImageData;
  let width: number, height: number;
  let i = -4;
  let length: number;
  const colorMap: { [key: string]: number } = {}; // Map to store frequency of colors
  let count = 0;

  if (!context) {
    return defaultRGB;
  }

  // Set canvas size to the image's size
  height = canvas.height =
    imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
  width = canvas.width = imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;

  context.drawImage(imgEl, 0, 0);

  try {
    data = context.getImageData(0, 0, width, height);
  } catch (e) {
    // Security error for cross-origin images
    return defaultRGB;
  }

  length = data.data.length;

  // Process pixels and count color frequencies
  while ((i += blockSize * 4) < length) {
    const r = data.data[i];
    const g = data.data[i + 1];
    const b = data.data[i + 2];

    const color = rgbToHex(r, g, b);
    if (colorMap[color]) {
      colorMap[color]++;
    } else {
      colorMap[color] = 1;
    }

    count++;
  }

  // Find the color with the maximum frequency
  let dominantColor = "";
  let maxCount = 0;

  for (const color in colorMap) {
    if (colorMap[color] > maxCount) {
      maxCount = colorMap[color];
      dominantColor = color;
    }
  }

  return dominantColor;
};

function componentToHex(c: number) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

// Helper function to convert RGB to hex
function rgbToHex(r: number, g: number, b: number) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
