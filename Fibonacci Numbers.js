const http = require('http');

const PORT = 3000;

// Function to generate Fibonacci numbers starting from 55
function generateFibonacciSeries(startValue, count) {
  const fib = [0, 1];
  while (fib[fib.length - 1] < 7000) {
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
  }

  // Filter starting from the first number >= startValue
  const result = fib.filter(num => num >= startValue).slice(0, count);
  return result;
}

const server = http.createServer((req, res) => {
  if (req.url === '/api/fibonacci' && req.method === 'GET') {
    const numbers = generateFibonacciSeries(55, 11);
    const response = JSON.stringify({ numbers });

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
