// 1. importar el modelo que vamos a trabajar

const Movie = require("../models/movie");

// 2. declarar las funciones que vamos a utilizar
const getMovie = async (req, res) => {
  try {
    const movie = await Movie.find();
    res.status(200).json({
      status: 200,
      message: "ok",
      data: movie,
    });
  } catch (error) {
    next(error);
  }
};
const getMovieByTitle = async (req, res, next) => {
  const { title } = req.params;
  try {
    const movie = await Movie.find({ title });
    if (movie) {
      res.status(200).json({
        status: 200,
        message: "ok",
        data: movie,
      });
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};
const getMovieById = async (req, res, next) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (movie) {
      res.status(200).json({
        status: 200,
        message: "ok",
        data: movie,
      });
    } else {
      res.status(404).json({
        status: 404,
        message: "check again",
      });
    }
  } catch (error) {
    next(error);
  }
};
module.exports = {
  getMovie,
  getMovieById,
  getMovieByTitle,
};
