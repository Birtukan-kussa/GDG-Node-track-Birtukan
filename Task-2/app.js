import express from "express";

const app = express();
const PORT = 3000;

// Root route
app.get("/", (req, res) => {
  res.send(`
    <html>
      <body>
        <h2>Welcome! Use the links below:</h2>
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/about">About</a></li>
          <li>Example Student API: <a href="/students/101?department=CS">/students/101?department=CS</a></li>
        </ul>
      </body>
    </html>
  `);
});

// Route: /home
app.get("/home", (req, res) => {
  res.send(`
    <html>
      <body>
        <h1 style="color: green;">Welcome to the Home Page</h1>
      </body>
    </html>
  `);
});

// Route: /about
app.get("/about", (req, res) => {
  res.send("This is the About page of our Express ES6 application.");
});

// Route: /students/:studentId
app.get("/students/:studentId", (req, res) => {
  const { studentId } = req.params;
  const { department } = req.query;

  res.json({
    studentId,
    department: department || "Not specified",
    status: "Student record fetched successfully"
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});