import { Response, Request } from "express";
import httpStatus from "http-status";

import * as moviesService from "@/services/moviesService";
import { InsertMovie, MovieUpdate } from "@/protocols/Movie";

export async function getMovie(req: Request, res: Response) {
  const { id } = req.params;
  const idNumber = parseInt(id);
  const movie = await moviesService.getMovie(idNumber);
  return res.status(httpStatus.OK).send(movie);
}

export async function getAllMovies(req: Request, res: Response) {
  const allMovies = await moviesService.getMovies();
  return res.status(httpStatus.OK).send(allMovies);
}

export async function getMoviesByGenre(req: Request, res: Response) {
  const moviesByGenre = await moviesService.getMoviesByGenre();
  return res.status(httpStatus.OK).send(moviesByGenre);
}

export async function insertNewMovie(req: Request, res: Response) {
  const movie = req.body as InsertMovie;
  await moviesService.insertMovie(movie);
  return res.status(httpStatus.CREATED).send("Movie was successfully added");
}

export async function watchMovie(req: Request, res: Response) {
  const { id } = req.params;
  const idNumber = parseInt(id);
  const updated = { ...req.body, id: idNumber } as MovieUpdate;
  await moviesService.updateMovie(updated);
  return res.status(httpStatus.OK).send("Movie was successfully updated");
}

export async function deleteMovie(req: Request, res: Response) {
  const { id } = req.params;
  const idNumber = parseInt(id);
  await moviesService.deleteMovie(idNumber);
  return res.status(httpStatus.OK).send("Movie was successfully deleted");
}
