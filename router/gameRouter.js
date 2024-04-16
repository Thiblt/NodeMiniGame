const { play, getScore, reset, cheat} = require("../controller/gameController")
const express = require("express")
const router = express.Router()

router.get("/play/:choice", play)
router.get("/score", getScore)
router.post("/reset", reset)
router.put("/score/:win/:loose/:tie", cheat)


module.exports = router