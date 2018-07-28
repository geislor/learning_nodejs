var http = require('http');
var server = http.createServer( function(req, res){
    var url = req.url;
    
    if (url == '/test'){
        res.end("<html><body>URL TEST 1</body</html>");

    }else{
        res.end("<html><body>Hello world</body></html>");
    }
})

server.listen(3000, "localtest.com"); 
