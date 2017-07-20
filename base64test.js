var base64 = require('base64image');

var path = __dirname + '/testImage.jpeg',
          options = {localFile: true, string: true};
 
base64.base64encoder(path, options, function (err, image) {  
    if (err) { console.log(err); }  
    console.log(image);  
}); 