/* MODULE IMPORTS */
import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";

import reviewRoutes from "./routes/review.route.js";
import hallRoutes from "./routes/hall.route.js";

/* EXPRESS CONFIG */
dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.json());

/* ROUTES */
app.use('/review', reviewRoutes);
app.use('/hall', hallRoutes);

/* CONNECT TO DATABASE */
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

/* START SERVER */
const PORT = process.env.PORT || BACKUP_PORT;
app.listen(PORT, () => {
    console.log("Server is running on Port: " + PORT);
});