const sharp = require('sharp');

const roundedCorners = Buffer.from(
  '<svg><rect x="0" y="0" width="200" height="200" rx="100" ry="100" /></svg>'
);

function cropImgToCircle(imageName){
  sharp(imageName)
    .resize(200, 200)
    .overlayWith(roundedCorners, { cutout: true, gravity: 'centre' })
    .toFile('output.jpg', function(err) {
      console.log(err);
  });
}

cropImgToCircle('input.jpg');
