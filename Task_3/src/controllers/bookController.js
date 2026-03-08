let books = [
  { id: 1, title: "Node Basics", price: 20 },
  { id: 2, title: "Express Guide", price: 25 }
];

// GET /books
export const getBooks = (req, res) => {
  res.status(200).json(books);
};

// GET /books/:id
export const getBookById = (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));

  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  res.status(200).json(book);
};

// POST /books
export const createBook = (req, res) => {
  const newBook = {
    id: books.length + 1,
    ...req.body
  };

  books.push(newBook);

  res.status(201).json({
    message: "Book created successfully",
    book: newBook
  });
};