const http = require('http');
const fs = require('fs');

const hostname = 'localhost';
const port = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        fs.readFile('./visuals/index.html', (err, data) => {
            if(err) throw err;
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            return res.end;
        })
    } else if(req.url === '/about') {
        fs.readFile('./visuals/about.html', (err, data) => {
            if(err) throw err;
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            return res.end;
        })
    } else if(req.url === '/contact-me') {
        fs.readFile('./visuals/contact-me.html', (err, data) => {
            if(err) throw err;
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            return res.end;
        })
    } else {
        fs.readFile('./visuals/404.html', (err, data) => {
            res.writeHead(404,{'Content-Type':'text/html'});
            res.write(data);
            return res.end;
        })
    }
})

server.listen(port, hostname, () => {
    console.log(`Server running at ${hostname}:${port}/`)
})