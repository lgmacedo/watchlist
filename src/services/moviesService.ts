import * as moviesRepository from "@/repositories/moviesRepository";
import noMoviesFound from "@/errors/noMoviesFound";
import { InsertMovie, MovieUpdate } from "@/protocols/Movie";
import idNotValid from "@/errors/idNotValid";
import movieNotFound from "../errors/movieNotFound";

export async function getMovie(id: number) {
  if (isNaN(id)) throw idNotValid;
  const movie = await moviesRepository.getMovieById(id);
  if (movie.rowCount) {
    return movie.rows[0];
  } else {
    throw movieNotFound;
  }
}

export async function getMovies() {
  const movies = await moviesRepository.getMovies();
  if (movies.length > 0) {
    return movies;
  } else {
    throw noMoviesFound;
  }
}

export async function getMoviesByGenre() {
  const genres = await moviesRepository.getMoviesByGenre();
  if (genres.length > 0) {
    return genres;
  } else {
    throw noMoviesFound;
  }
}

export async function insertMovie(movie: InsertMovie) {
  await moviesRepository.insertMovie(movie);
}

export async function updateMovie(updated: MovieUpdate) {
  await getMovie(updated.id);
  await moviesRepository.updateMovie(updated);
}

export async function deleteMovie(id: number) {
  await getMovie(id);
  await moviesRepository.deleteMovieById(id);
}
