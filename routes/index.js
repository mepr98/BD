const express = require("express");
const router = express.Router();
const dbconnection = require('../config/database');

router.get("/", (req, res) => {
 
    res.render("layout", { title: "Layout" });
  
  
});

module.exports = router;
