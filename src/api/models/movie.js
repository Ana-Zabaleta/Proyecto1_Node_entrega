const mongoose = require("mongoose");
const movieSchema = new mongoose.Schema({
  title: { type: String, require: true },
  director: { type: String, require: true },
  year: { type: Number },
  genre: { type: String, require: true },
});

const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;
