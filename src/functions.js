const sharp = require('sharp');
const readline = require('readline-sync');

const roundedCorners = Buffer.from('<svg><rect x="0" y="0" width="200" height="200" rx="100" ry="100" /></svg>');

function getFilename(){
  console.log("\nEnter a filename:");
  console.log("(File should be in the input project folder)\n");
  let filename = readline.prompt().trim();

  while (!checkFilenameOK(filename)){
    console.log("\nThere was a problem with that filename, try again:");
    console.log(" (Make sure your filename doesn't have any spaces)\n");
    filename = readline.prompt().trim();
  }

  console.log(`Circularising file: ${filename} `);
  return filename;
}

function checkFilenameOK(filename){
    if (filename.match(/\./g) === null || filename.match(/\./g).length > 1){
      return false;
    } else if (filename.length < 5){
      return false;
    } else if (filename.match(/ /g)){
      return false;
    } else {
      return true;
    }
}

function makeOutputName(filename){
  let nameStart = filename.split('.')[0];
  let extension = filename.split('.')[1];

  return `${nameStart}-circularised.${extension}`
}

function cropImgToCircle(filename) {
  sharp(`input/${filename}`).resize(200, 200).overlayWith(roundedCorners, {
    cutout: true,
    gravity: 'centre'
  }).toFile(`output/${makeOutputName(filename)}`, function (err) {
    console.log (`Circularised image ${makeOutputName(filename)} saved!`)
    if (err){
      console.log(err);
    }
  });
}



//Exports
module.exports = {
  getFilename,
  checkFilenameOK,
  makeOutputName,
  cropImgToCircle
}
