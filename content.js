chrome.extension.sendRequest('getCredentials', function(response) {
  
  var pnr = response.pnr;
  var pin = response.pin;
  
  console.log("pnr is %o and pin is %o", pnr, pin);

});
