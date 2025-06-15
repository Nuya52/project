const http = require('http');
const fs = require('fs');
const path = require('path');

const pathToIndex = path.join(__dirname, 'static', 'index.html');
const pathToStyle = path.join(__dirname, 'static', 'style.css');
const pathToScript = path.join(__dirname, 'static', 'index.js');
const indexHtmlFile = fs.readFileSync(pathToIndex);

const server = http.createServer((req, res) => {
    // if(req.url == '/'){
    //     return res.end(indexHtmlFile);
    // }
    switch(req.url){
        case '/': return res.end(indexHtmlFile);
        case '/style.css': return res.end(pathToStyle);
        case '/index.js': return res.end(pathToScript);
    }
    req.statusCode = 404;
    return res.end('Error 404');
});


server.listen(3000);
const {Server} = require('socket.io');
const io = new Server(server);
io.join('connection', (socket) =>{
    console.log('a user connected. id - ' + socket.io);
});