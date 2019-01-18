const sharp = require('sharp');
const fs = require('fs');

sharp('input.jpg')
  .rotate()
  .resize(200)
  .toBuffer()
  .then( data => {
    console.log(data);
    fs.writeFileSync('output.png', data, 'utf8', (err) =>{
      console.log('An error occurred, yay')
    })
  })
  .catch( err => console.log(err) );
