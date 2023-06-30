import express, { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.get("/health", (req: Request, res: Response) => {
  res.status(200).send("I'm ok");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server is up and running"));
