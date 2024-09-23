const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {

    console.log("headers: ", req.headers);

    console.log("url: ", req.url);
    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(fs.readFileSync('mensagens.txt', 'utf8'));
    } else if (req.url == '/estudantes' && req.headers.accept === 'application/xml') {
        res.writeHead(200, {'Content-Type': 'application/xml'});
        res.end('<estudantes><estudante><nome>João</nome><idade>20</idade></estudante></estudantes>');

    } else if (req.url == '/professor' && req.headers.accept === 'application/json') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end('{"professor": {"nome": "Maria", "idade": 30}}');
    } else {
        res.writeHead(406, {'Content-Type': 'text/plain'});
        res.end('Página não encontrada');
    } 

}).listen(3000, '127.0.0.1');