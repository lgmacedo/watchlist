export type Movie = {
  id: number;
  title: string;
  platform: string;
  genre: string;
  watched: boolean;
  overview: string;
};

export type InsertMovie = Omit<Movie, "id">;

export type MovieUpdate = {
  id: number;
  watched: boolean;
  overview: string;
};
