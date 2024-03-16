// Importar

const express = require("express");
const { connect, connectMongo } = require("./utils/db");
//const cors = require("cors");

const movieRouter = require("./src/api/routes/movie.routes");

// 2. configuarcion
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
connectMongo();

// 3. endpoints

//app.use(cors());

app.get("/", (req, res) => {
  res.send("Server is up");
});
app.use("/movie", movieRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port : ${PORT}`);
});
