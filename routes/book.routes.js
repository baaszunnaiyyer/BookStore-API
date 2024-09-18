import express from "express";
import { Book } from "../model/book.models.js";
import { getBooks, getBook, uploadBook, updateBook, deleteBook } from "../controller/books.controller.js";

const router = express.Router();

//Get All the Books
router.get("/", getBooks)

//Get a Single Book

router.get("/:id", getBook)

//updates a book by ID
router.put("/:id", uploadBook)


//Delete a Books by ID
router.delete("/:id", updateBook)


// uploads a new Book
router.post("/", deleteBook)

export default router;