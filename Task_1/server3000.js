const http = require('http');

// Create the server
const server = http.createServer((req, res) => {

  // Normalize URL (fixes /submit, /submit/, /submit?x=1)
  const url = req.url.split('?')[0];

  console.log("Incoming:", req.method, url);

  // Route: GET /
  if (req.method === 'GET' && url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome to the Home Page');
  }

  // Route: GET /info
  else if (req.method === 'GET' && url === '/info') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('This is the information page');
  }

  // Route: POST /submit
  else if (req.method === 'POST' && url === '/submit') {
    let body = '';

    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {
      try {
        const jsonData = JSON.parse(body);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(jsonData));
      } catch (error) {
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        res.end('Invalid JSON');
      }
    });
  }

  // Default 404
  else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Route not found');
  }
});

// Start server on port 3000
server.listen(3000, () => {
  console.log('Server running on port 3000');
});
