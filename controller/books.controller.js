import { Book } from "../model/book.models.js";

export const getBooks = async (req,res)=>{
    try {
        const books = await Book.find({});
        res.status(201).json({
            count:books.length,
            data: books
        })
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message})
    }
};

export const getBook = async (req,res)=>{
    try {

        const {id} = req.params;

        const book = await Book.findById(id);
        res.status(201).json(book)
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message})
    }
};

export const updateBook = async (req,res)=>{
    try {
        // if (!req.body.title || !req.body.author || !req.body.publishYear) {
        //     return res.status(400).send({ message: "Send All Required Fields" });
        // }

        const {id} = req.params;

        const result = await Book.findByIdAndUpdate(id, req.body)

        if(!result){
            return res.status(404).send({message: "Book not found"})
        }

        res.status(201).send(await Book.findById(id))

    } catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message})
    }
};

export const deleteBook = async (req,res)=>{
    try {

        const {id} = req.params;

        const result = await Book.findByIdAndDelete(id)

        if(!result){
            return res.status(404).send({message: "Book not found"})
        }

        res.status(201).send({message:"Book Deleted Sucessfully"})

    } catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message})
    }
};

export const uploadBook = async(req,res)=>{
    try {
        if (!req.body.title || !req.body.author || !req.body.publishYear) {
            return res.status(400).send({ message: "Send All Required Fields" });
        }
        const newBook = {
            title : req.body.title,
            author : req.body.author,
            publishYear : req.body.publishYear
        };

        const book = await Book.create(newBook);
        return res.status(201).send(book)
        
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message:error.message})
        
    }
};

