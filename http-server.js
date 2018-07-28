var http = require('http');
var server = http.createServer( function(req, res){
    res.end("<html><body>Hello world</body></html>");
})

server.listen(3000);