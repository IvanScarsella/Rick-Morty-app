const  { Router } = require("express");
const getCharById = require("../src/controllers/getCharById");
const getCharDetail = require("../src/controllers/getCharDetail");
let favs = require("../utils/favs");

const router = Router();

router.get("/onsearch/:id, getCharById");

router.get("/detail/:id", getCharDetail);

router.post("/rickandmorty/fav", (req, res) => {
    res.status(200).json(favs);
});

router.get("/rickandmorty/fav/:id", (req, res) => {
    res.status(200).json(favs);
});

router.delete("/rickandmorty/fav/:id", (req, res) => {
    const { id } = req.params;
    favs = favs.filter((char) => char.id != id);
    res.status(200).json({ status: "ok" });
})

module.exports = router;