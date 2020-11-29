var express = require('express');
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/mindhiro", function(req, res, next) {
  res.render("mindhiro", { title:  "mindhiro" });
});

router.get("/landing", function(req, res, next) {
  res.render("landing", { title:  "landing" });
});

router.get("/preguntas", function(req, res, next) {
  res.render("preguntas", { title:  "preguntas" });
});


module.exports = router;
