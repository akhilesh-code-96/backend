import dotenv from "dotenv";
// require('dotenv').config({path: './env'})
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

connectDB();

// const app = express();

/*
(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error", (error) => {
            console.log("ERR: ", error);
            throw error
        })
    } catch (error) {
        console.error("Error: ", error);
        throw error 
    }
})()
*/
