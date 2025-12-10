const http = require('http');

let students = [
  { id: 1, name: 'Ahmed' },
  { id: 2, name: 'Sara' }
];

const server = http.createServer((req, res) => {
  // GET /students → return all students
  if (req.method === 'GET' && req.url === '/students') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(students));
  }

  // POST /students → add new student
  else if (req.method === 'POST' && req.url === '/students') {
    let body = '';

    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {
      try {
        const newStudent = JSON.parse(body);

        if (!newStudent.id || !newStudent.name) {
          res.writeHead(400, { 'Content-Type': 'text/plain' });
          return res.end('Student must have id and name');
        }

        students.push(newStudent);

        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(newStudent));

      } catch (err) {
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

// Start server on port 4000
server.listen(4000, () => {
  console.log('Student API running on port 4000');
});
