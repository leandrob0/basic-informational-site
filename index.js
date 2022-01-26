const http = require('http');

const hostname = 'localhost';
const port = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello, World!</h1>');
})

server.listen(port, hostname, () => {
    console.log(`Server running at ${hostname}:${port}/`)
})