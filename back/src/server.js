// require("dotenv").config();
const express = require("express");
const router = require("../routes/index")
const morgan = require("morgan");
const cors = require("cors");
const { conn } = require("./DB_connection");

const PORT = process.env.PORT || 3100;

conn.sync({ force: true }).then(() => {
  server.listen(3100, () => {
    console.log(`Listening on port ${PORT}`);
  })
})


const server = express();

server.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // el * permite que se puedan hacer las peticiones al servidor despues del deploy
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

server.use(express.json());
server.use(morgan("dev"));
server.use(cors());

server.use("/", router);



