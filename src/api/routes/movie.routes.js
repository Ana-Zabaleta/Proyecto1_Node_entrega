const express = require("express");
const movieRouter = express.Router();

const {
  getMovie,
  getMovieById,
  getMovieByTitle,
  getMovieByGenre,
  getMovie2010,
} = require("../controller/movie.controller");

movieRouter.get("/", getMovie);
movieRouter.get("/:id", getMovieById);
movieRouter.get("/title/:title", getMovieByTitle);
movieRouter.get("/genre/:genre", getMovieByGenre);
movieRouter.get("/2010", getMovie2010);

module.exports = movieRouter;
