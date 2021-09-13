const http = require('http')

// Work with anonymous function
const server = http.createServer((req, res) => {
    const url = req.url
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>')
        res.write('<title>My Node Js</title>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
        res.write('</html>')
        return res.end()
    }
    //console.log(req.url, req.method, req.headers)
    //process.exit()
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<title>My Node Js</title>')
    res.write('<body> <h3> Revise Node JS<h3></body>')
    res.write('</html>')
    res.end()
})

// NodeJS keep this running to keep listen to incoming requesrt
server.listen(3000)

