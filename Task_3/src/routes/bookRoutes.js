import express from "express";
import { getBooks, getBookById, createBook } from "../controllers/bookController.js";
import { bookSchema } from "../utils/validationSchema.js";

const router = express.Router();

const validateBook = (req, res, next) => {
  const { error } = bookSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  next();
};

router.get("/", getBooks);
router.get("/:id", getBookById);
router.post("/", validateBook, createBook);

export default router;