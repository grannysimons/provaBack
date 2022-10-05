const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.send("SÓC LA ARREL!!");
});

module.exports = router;
