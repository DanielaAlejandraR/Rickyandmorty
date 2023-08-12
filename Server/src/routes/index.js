// const {login} = require("../controllers/login")
// const {getCharById} = require("../controllers/getCharById");
// const {postFav, deleteFav} = require("../controllers/handleFavorites");

// const router = require("express").Router();

// router.get("/character/:id", (req, res) => {
//     getCharById(req, res);
// }); 

// router.get("/login", (req, res) => {
//     login(req, res);
// });

// router.post("/fav/:id", (req, res) => {
//     postFav(req, res);
// })

// router.delete("/fav/:id", (req, res) => {
//     deleteFav(req, res);
// })

// module.exports = router;

const express = require('express')
const router = express.Router()

const { getCharById }  = require('../controllers/getCharById')
const login  = require('../controllers/login')
const postFav = require('../controllers/postFav')
const postUser = require('../controllers/postUser')
const deleteFav = require('../controllers/deleteFav')


router.get('/character/:id', getCharById)

router.get('/login', login)
router.post('/login', postUser)
router.post('/fav', postFav)
router.delete('/fav/:id', deleteFav)

module.exports = router