import express from "express";
import bookRoutes from "./routes/bookRoutes.js";
import logger from "./middlewares/logger.js";

const app = express();

app.use(express.json());
app.use(logger);

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to the Bookstore API");
});

app.use("/books", bookRoutes);

export default app;