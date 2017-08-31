// Produce an animated rainbow over 25 LEDs
WioLTE.setLEDPower(true);
var rgb = new Uint8ClampedArray(3);
var pos = 0;
function getPattern() {
  pos++;
  for (var i=0;i<rgb.length;) {
    rgb[i++] = (1 + Math.sin((i+pos)*0.1324)) * 10;
    rgb[i++] = (1 + Math.sin((i+pos)*0.1654)) * 10;
    rgb[i++] = (1 + Math.sin((i+pos)*0.1)) * 10;
  }
  return rgb;
}

setInterval(function() {
  var c = getPattern();
  WioLTE.LED(c[0],c[1],c[3]);
}, 100);
