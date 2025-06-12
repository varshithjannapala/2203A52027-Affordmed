const http = require('http');

const PORT = 3000;

// Function to generate even numbers in a specific range
function generateEvenNumbers(start, end) {
  const evens = [];
  for (let i = start; i <= end; i += 2) {
    evens.push(i);
  }
  return evens;
}

const server = http.createServer((req, res) => {
  if (req.url === '/api/even-numbers' && req.method === 'GET') {
    const numbers = generateEvenNumbers(8, 56); // Generate even numbers from 8 to 56
    const response = JSON.stringify({ numbers });

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(response);
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Not Found' }));
  }
});

server.listen(PORT, () => {
  console.log(`Even Numbers API is running at http://localhost:${PORT}`);
});
