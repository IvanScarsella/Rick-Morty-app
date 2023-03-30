require("dotenv").config();
const express = require("express");
const router = require("./routes");
const morgan = require("morgan"); // middleware que imprime en la consola lo que le manda al servidor
const cors = require("cors");

const PORT = process.env.PORT || 3001;

const server = express();
server.use(express.json());

server.use(morgan("dev"))

server.search(cors());

server.use("/rickandmorty", router);

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});