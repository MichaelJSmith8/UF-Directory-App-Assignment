var http = require('http'),
    fs = require('fs'),
    url = require('url'),
    port = 8080;

/* Global variables */
var listingData, server, parsedUrl;

var path = false;

var requestHandler = function(request, response) {
   parsedUrl = url.parse(request.url);








  /*
    Your request handler should send listingData in the JSON format if a GET request
    is sent to the '/listings' path. Otherwise, it should send a 404 error.
    HINT: explore the request object and its properties
    http://stackoverflow.com/questions/17251553/nodejs-request-object-documentation
   */
};

fs.readFile('listings.json', 'utf8', function(err, data) {

listingData = data;
server  = http.createServer(function (request, response) {

  if(request.method == "GET" && request.url == '/listings'){
  response.writeHead(200, {'Content-Type': 'text/plain'});
  //response.write(parsedUrl);
  response.end(listingData);
}
else{
  response.writeHead(404, {'Content-Type': 'text/plain'});

  response.end('Bad gateway error');
}


}).listen(port);


  /*
    This callback function should save the data in the listingData variable,
    then start the server.
   */
});
