//node test/ui/simple.js

// Start a server
var connect = require('connect');
connect(connect.static('site')).listen(8001);

//Play with zombie

var Browser = require("zombie");

browser = new Browser()
browser.visit("http://localhost:8001/", function () {
  if(browser.text("#hello") !== "Why hello there!") {
    throw "FAIL";
  } else {
    throw "PASS";
  }
});