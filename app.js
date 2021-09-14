const http = require('http')
const fs = require('fs')

// Work with anonymous function
const server = http.createServer((req, res) => {
    const url = req.url
    const method = req.method
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>')
        res.write('<title>My Node Js</title>')
        //  POST reuqest
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
        res.write('</html>')
        return res.end()
    }
    if (url === '/message' && method === 'POST' ){
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk)
            body.push(chunk)
        })
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString()
            const message = parsedBody.split('=')[1]
            console.log(parsedBody)
            fs.writeFileSync('message.txt', message)
        })
        
        // writeHead allow to write meta information in one go
        // 302 is a status code stands for Redirection
        res.statusCode = 302
        res.setHeader('Location', '/')
        return res.end()
        //  Can alwo written like this :-
        //     -----> res.writeHead(302, {})

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

