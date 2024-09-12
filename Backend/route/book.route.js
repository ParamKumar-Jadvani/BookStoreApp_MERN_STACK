import express from "express";
import { getBook } from "../controller/book.controller.js";
import Book from "../model/book.model.js";

const router = express.Router();

router.get("/", getBook);
router.patch("/:id", async (req, res) => {
  const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.send(book);
});

router.post("/", async (req, res) => {
  const book = await Book.create(req.body);
  res.send(book);
});
export default router;
