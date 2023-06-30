import express from "express";
import "express-async-errors";
import dotenv from "dotenv";
import moviesRouter from "@/routers/moviesRouter";
import errorHandler from "@/middlewares/errorHandler";

dotenv.config();

const app = express();
app.use(express.json());
app.use(moviesRouter);
app.use(errorHandler);

const port = process.env.PORT || 5002;
app.listen(port, () => console.log(`Server is up and running on port ${port}`));
