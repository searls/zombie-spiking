//run with "jasmine-node test" from the root

// Start a server
var connect = require('connect');
connect(connect.static('site')).listen(8001);

//Play with zombie

var Browser = require("zombie"),
    browser = new Browser();


describe("using a browser", function(){
  it("reading some text on a static page", function(done){
    browser.visit("http://localhost:8001/", function () {
      expect(browser.text("#hello")).toEqual("Why hello there!");
      done();
    });
  });
});

