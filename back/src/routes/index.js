const { Router } = require("express");
const getCharById = require("../controllers/getCharById");
const getCharDetail = require("../controllers/getCharDetail");
const favs = require("./utils")

const router = Router();

router.get("/onsearch/:id", getCharById)

router.get("/detail/:id", getCharDetail)

router.post("/rickandmorty/favs", (req, res) => {
    favs.push(req.body);
    res.status(200).json({status : "ok"})
})

router.get("/rickandmorty/favs", (req, res) => {
    favs.push(req.body);
    res.status(200).json({status : "ok"})
})

router.delete("/rickandmorty/fav/:id", (req, res) => {
    const { id } = req.params;
    favs = favs.filter ((char) => char.id != id)
    res.status(200).json({ status: "ok" })
});

module.exports = router;