const sharp = require('sharp');
const fs = require('fs');

const roundedCorners = Buffer.from(
  '<svg><rect x="0" y="0" width="200" height="200" rx="100" ry="100" /></svg>'
);

function cropImgToCircle(imageName){
  sharp(imageName)
    .resize(200, 200)
    .overlayWith(roundedCorners, { cutout: true, gravity: 'centre' })
    .toBuffer()
    .then( data => {
      fs.writeFileSync('output.png', data, 'utf8', (err) =>{
        console.log('An error occurred, yay')
      })
    })
    .catch( err => console.log(err) );
}

cropImgToCircle('input.jpg');
