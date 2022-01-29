const express = require('express');
const path = require('path');
const app = express();

const hostname = 'localhost';
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/visuals/index.html'));
})

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname+'/visuals/about.html'));
})

app.get('/contact-me', (req, res) => {
    res.sendFile(path.join(__dirname+'/visuals/contact-me.html'));
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/visuals/404.html'));
})

app.listen(port, hostname, () => {
    console.log(`Server running at ${hostname}:${port}/`)
})