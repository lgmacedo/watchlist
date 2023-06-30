import connection from "@/database/connection";
import { Movie, InsertMovie, MovieUpdate } from "@/protocols/Movie";
import { QueryResult } from "pg";
import { Genre } from "../protocols/Genre";

export async function getMovieById(id: number) {
  const query = `SELECT * FROM movies WHERE id = $1;`;
  const result = await connection.query<Movie>(query, [id]);
  return result;
}

export async function getMovies() {
  const query = `SELECT * FROM movies;`;
  const result = await connection.query<Movie>(query);
  return result.rows;
}

export async function getMoviesByGenre() {
  const query = `SELECT genre, COUNT(*) AS movie_count
                FROM movies
                GROUP BY genre
                ORDER BY movie_count DESC;`;
  const result = await connection.query<Genre>(query);
  return result.rows;
}

export async function insertMovie(movie: InsertMovie) {
  const query = `INSERT INTO movies (title, platform, genre, watched, overview) 
                VALUES ($1, $2, $3, $4, $5);`;
  const result = await connection.query<InsertMovie>(query, [
    movie.title,
    movie.platform,
    movie.genre,
    movie.watched ? true : false,
    movie.overview,
  ]);
  return result;
}

export async function updateMovie(updated: MovieUpdate) {
  const query = `UPDATE movies SET watched = $1, overview = $2 WHERE id = $3;`;
  const result = await connection.query<MovieUpdate>(query, [
    updated.watched,
    updated.overview,
    updated.id,
  ]);
  return result;
}

export async function deleteMovieById(id: number) {
  const query = `DELETE FROM movies WHERE id = $1;`;
  const result = await connection.query<Movie>(query, [id]);
  return result;
}
