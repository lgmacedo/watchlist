import { Request, Response, NextFunction } from "express";
import { Error } from "../protocols/Error";
import httpStatus from "http-status";

export default function errorHandler(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (error.type === "noMoviesFound" || "movieNotFound")
    return res.status(httpStatus.NOT_FOUND).send(error.message);

  return res
    .status(httpStatus.INTERNAL_SERVER_ERROR)
    .send("An unexpected error occurred. Please try again");
}
