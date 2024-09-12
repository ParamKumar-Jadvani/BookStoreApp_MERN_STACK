import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
  name: { type: String, unique: true, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  author: { type: String, unique: true, required: true },
});

const Book = mongoose.model("Book", bookSchema);

export default Book;
