const express = require("express");
const app = express();

const userRoutes = require("./routes/userRoutes");

app.use(express.json());

app.use("/users", userRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Open in browser: http://localhost:${PORT}/users`);
});