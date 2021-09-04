var http = require('http')

// I am going to creeate a server
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'Text-Plain' });
    res.end('Hello Node!')
    //res.end('Server stareted on localhost:8080, press ctrl C to terminate')
    // That server will listen to port 8080
}).listen(8080);

// 
console.log('Server stareted on localhost:8080, press ctrl C to terminate')