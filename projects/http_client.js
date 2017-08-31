var board;
var APN = "UNINET";
var USERNAME = "";
var PASSWORD = "";

function wiolteStart(debug_quectel, debug_at) {
  debug_quectel = debug_quectel || false;
  debug_at = debug_at || false;

  board = require('wiolte').connect(function(err) {
    console.log("connectCB entered...");
    if (err) throw err;
    setTimeout(doConnect,3000);
  });

  board.debug(debug_quectel, debug_at);

}

function doConnect() {
  board.connect(APN, USERNAME, PASSWORD, function(err) {
    console.log("connectCB entered...");
    if (err) throw err;
    board.getIP(print);

    // Run onConnected 5 seconds after connected
    setTimeout(onConnected, 5000);

  });
}

function onConnected(){
  GetHtmlPage("http://www.pur3.co.uk/hello.txt");
}

function GetHtmlPage(html_page){
  require("http").get(html_page, function(res) {
    var contents = "";

    console.log("Response: ",res);

    res.on('data', function(d) {
      contents += d;
    });

    res.on('close', function(d) {
		console.log("Connection closed");
		console.log("full page content ---> \r\n"+contents);
    });
  });
}

wiolteStart();
