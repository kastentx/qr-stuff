var jsQR = require("jsqr");
var fs = require('fs');
var Canvas = require('canvas')
  , Image = Canvas.Image
  , canvas = new Canvas(640, 480)
  , ctx = canvas.getContext('2d');

fs.readFile(__dirname + '/testImage.jpeg', function(err, data){
  if (err) throw err;
  img = new Image;
  img.src = data;
  ctx.drawImage(img, 0, 0, img.width, img.height);
});

var imageData = ctx.getImageData(0, 0, 640, 480);
console.log(imageData.data.length);
console.log(640 * 480 * 4);

//var binarizedImage = jsQR.binarizeImage(imageData, 640, 480);
//var location = jsQR.locateQRInBinaryImage(binarizedImage);
//if (!location) {
//  console.log('no qr code found in image');
//} else {
//    console.log(location);
//}