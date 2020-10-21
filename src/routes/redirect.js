const express = require("express");
const router = express.Router();

// hace llamado al esquema Tikect
var http = require("http");
var fs = require("fs");

router.get("/:url", (req, res) => {
  // res.json({ url: req.params.url });
  // let urlParam = encodeURIComponent(req.params.url);
  res.redirect(req.params.url);
});

// ruta que obtiene los datos almacenados en el esquema Tikect

module.exports = router;
