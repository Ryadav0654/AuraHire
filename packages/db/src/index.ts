import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

async function main() {
  try {
    const dbUrl: string = process.env.MONGO_URI || "";
    console.log("dbUrl: ", dbUrl);
    const connection = await mongoose.connect(dbUrl);
    console.log("Database connected!");
    return connection;
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

export default main;
// main().then(() => {
//     console.log("Database connected!");
// }).catch((e) => {
//     console.error(e.message);
//     process.exit(1);
// })
