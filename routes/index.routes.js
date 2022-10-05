const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.json({
    missatge: "hola tu"
  });
});

module.exports = router;
