var fs = require('fs');

var myImage = __dirname + '/testImage.jpeg';

function decodeImage(imagePath) {
  var imageData = fs.readFileSync(imagePath);
  return new Buffer(imageData, 'base64');
}

console.log(imageData.toString('base64'));