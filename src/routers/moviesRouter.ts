import { Router } from "express";
import {
  deleteMovie,
  getAllMovies,
  getMovie,
  getMoviesByGenre,
  insertNewMovie,
  watchMovie,
} from "@/controllers/moviesController";
import validateSchema from "@/middlewares/validateSchema";
import insertMovieSchema from "@/schemas/insertMovieSchema";
import watchMovieSchema from "../schemas/watchMovieSchema";

const moviesRouter = Router();
moviesRouter.get("/movies/:id", getMovie);
moviesRouter.get("/movies", getAllMovies);
moviesRouter.get("/moviesByGenre", getMoviesByGenre);
moviesRouter.post("/movies", validateSchema(insertMovieSchema), insertNewMovie);
moviesRouter.put("/movies/:id", validateSchema(watchMovieSchema), watchMovie);
moviesRouter.delete("/movies/:id", deleteMovie);

export default moviesRouter;
