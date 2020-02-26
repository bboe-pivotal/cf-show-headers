const http = require('http');


const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  res.end(JSON.stringify(req.headers));
});

server.listen( process.env.PORT || 4000)


