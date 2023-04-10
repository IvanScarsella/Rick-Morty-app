const { Router } = require("express");
const getCharById = require("../src/controllers/getCharById");
const getCharDetail = require("../src/controllers/getCharDetail");
const { postFav } = require("../src/controllers/postFav");
const { getFavs } = require("../src/controllers/getFavs");
const { deleteFav } = require("../src/controllers/deleteFav");
const { login } = require("../src/controllers/login");
const { postUser } = require("../src/controllers/postUser");

const router = Router();

router.get("/onsearch/:id", getCharById);
router.get("/detail/:id", getCharDetail);

router.post("/fav", postFav);
router.get("/fav", getFavs);
router.delete("/fav/:id", deleteFav)

router.get("/login", login);
router.post("/login", postUser)

module.exports = router;