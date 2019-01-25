const {expect} = require('chai');

const { getFilename,checkFilenameOK,makeOutputName, cropImgToCircle } = require('../src/functions.js');

describe ("Filename checking function protects against bad input", function (){

  it("Detects presence of more than one full-stop", function() {
    const userInput = "filename..jpg"

    expect(checkFilenameOK(userInput)).to.equal(false);
  });

  it("Detects absence of full-stop", function() {
    const userInput = "filenamejpg"

    expect(checkFilenameOK(userInput)).to.equal(false);
  });

  it("Detects short input that can't be a filename", function() {
    const userInput = ".jpg"

    expect(checkFilenameOK(userInput)).to.equal(false);
  });

  it("Prevents usage of filenames containing spaces", function() {
    const userInput = ".jpg"

    expect(checkFilenameOK(userInput)).to.equal(false);
  });

});
