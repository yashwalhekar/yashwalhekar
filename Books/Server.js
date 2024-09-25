const express = require("express");

const app = express();

const PORT = 5001;

const Books = [
  {
    id: "1",
    name: "To Kill a Mockingbird",
    author: "Harper Lee",
  },
  {
    id: "2",
    name: "1984",
    author: "George Orwell",
  },
  {
    id: "3",
    name: "Pride and Prejudice",
    author: "Jane Austen",
  },
  {
    id: "4",
    name: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
  },
  {
    id: "5",
    name: "Moby-Dick",
    author: "Herman Melville",
  },
];
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.body);
  console.log("I created my first custom middleware");
  next()
  
});
app.get("/", (req, res) => {
  res.json({
    status: "Success",
    message: "Home Route",
  });
});

app.get("/Books", (req, res) => {
  const id = req.params.id;
  const bookFound = Books.find((book) => book.id === id);
  console.log(bookFound);

  if (!bookFound) {
    return res.json({
      status: "failed",
      message: `Book with ${id} not found`,
    });
  }
  res.json({
    status: "success",
    message: "Book is fetched",
    data: bookFound,
  });
});

app.post("/Books", (req, res) => {
  const newData = req.body;
  Books.push(newData);

  res.json({
    status: "success",
    message: "Book is created",
    data: Books,
  });
});
app.listen(PORT, console.log(`The server is running on sss ${PORT}`));
