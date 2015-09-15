var pitft = require("pitft");

var fb = pitft("/dev/fb1"); // Returns a framebuffer in direct mode.  See the clock.js example for double buffering mode

// Clear the screen buffer
fb.clear();

var xMax = 0; //fb.size().width;
var yMax = 0; //fb.size().height;

var imageList = ["GE_logo.png", "rpi_logo.png"];
var imageCounter = 0;

var update = function() {
  if (imageCounter < imageList.length) {
    fb.clear();
    fb.image(x, y, "images/" + imageList[imageCounter]); // Draw the image at position x, y
    imageCounter++;
  } else {
    imageCounter = 0;
    fb.clear();
    fb.image(x, y, "images/" + imageList[imageCounter]); // Draw the image from the file "raspberry-pi.png" at position x, y
  }
}

setInterval(function() {
  update();
}, 1000);
