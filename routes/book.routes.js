import express from "express";
import { Book } from "../model/book.models.js";
import { getBooks, getBook, uploadBook, updateBook, deleteBook } from "../controller/books.controller.js";

const router = express.Router();

//Get All the Books
router.get("/", getBooks)

//Get a Single Book

router.get("/:id", getBook)

//updates a book by ID
router.put("/:id", updateBook)


//Delete a Books by ID
router.delete("/:id", deleteBook)


// uploads a new Book
router.post("/", uploadBook)

export default router;