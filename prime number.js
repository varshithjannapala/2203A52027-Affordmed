const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/api/primes' && req.method === 'GET') {
    const primes = [2, 3, 5, 7, 11];
    const response = JSON.stringify({ numbers: primes });

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(response);
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Not Found' }));
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
