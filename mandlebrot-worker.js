importScripts('https://cdnjs.cloudflare.com/ajax/libs/big.js/6.2.1/big.min.js');

self.onmessage = function(e) {
    const { width, height, centerX, centerY, scale, maxIter, time } = e.data;
    const imageData = new Uint8ClampedArray(width * height * 4);
    const cx = Big(centerX);
    const cy = Big(centerY);
    const s = Big(scale);

    for (let px = 0; px < width; px++) {
        for (let py = 0; py < height; py++) {
            const x0 = cx.plus(Big(px).minus(width / 2).times(s));
            const y0 = cy.plus(Big(py).minus(height / 2).times(s));
            let x = Big(0);
            let y = Big(0);
            let iter = 0;

            while (x.times(x).plus(y.times(y)).lte(4) && iter < maxIter) {
                const xtemp = x.times(x).minus(y.times(y)).plus(x0);
                y = x.times(y).times(2).plus(y0);
                x = xtemp;
                iter++;
            }

            const index = (px + py * width) * 4;
            if (iter === maxIter) {
                imageData[index] = 0;
                imageData[index + 1] = 0;
                imageData[index + 2] = 0;
            } else {
                const hue = (iter / maxIter * 360 + time) % 360;
                let r, g, b;
                if (hue < 90) {
                    r = 255;
                    g = Math.sin(hue / 90 * Math.PI) * 105;
                    b = 255 - Math.sin(hue / 90 * Math.PI) * 100;
                } else if (hue < 180) {
                    r = 255 - Math.sin((hue - 90) / 90 * Math.PI) * 150;
                    g = Math.sin((hue - 90) / 90 * Math.PI) * 100;
                    b = 255;
                } else if (hue < 270) {
                    r = Math.sin((hue - 180) / 90 * Math.PI) * 100;
                    g = 255;
                    b = 255 - Math.sin((hue - 180) / 90 * Math.PI) * 200;
                } else {
                    r = 255 - Math.sin((hue - 270) / 90 * Math.PI) * 100;
                    g = 255 - Math.sin((hue - 270) / 90 * Math.PI) * 150;
                    b = Math.sin((hue - 270) / 90 * Math.PI) * 150;
                }
                imageData[index] = r;
                imageData[index + 1] = g;
                imageData[index + 2] = b;
            }
            imageData[index + 3] = 255;
        }
    }

    self.postMessage({ imageData, width, height });
};