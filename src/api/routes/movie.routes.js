const express = require("express");
const movieRouter = express.Router();

const {
  getMovie,
  getMovieById,
  getMovieByTitle,
} = require("../controller/movie.controller");

movieRouter.get("/", getMovie);
movieRouter.get("/:id", getMovieById);
movieRouter.get("/:title", getMovieByTitle);

module.exports = movieRouter;
