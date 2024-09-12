import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connect_to_DB = async () => {
  await mongoose.connect(process.env.MongoDBURI);
  console.log("Connected to MongoDB");
};

export default connect_to_DB;
