var express = require('express');
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/mindhiro", function(req, res, next) {
  res.render("mindhiro", { title:  "mindhiro" });
});

module.exports = router;
