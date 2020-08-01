const express = require("express");
const burger = require("../models/burger");
const router = express.Router();

router.get("/", (req, res) => {
  burger.selectAll((data) => {
    const hbsObject = {
      burgers: data,
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burger", (req, res) => {
  console.log(req);
  burger.insertOne(req.body.burger_name, () => {
    res.redirect("/");
  });
});

router.put("/api/burger/:id", (req, res) => {
  console.log(req);
  const response = db.update(req.params.id);
  console.log(response);
  res.json({
    status: 200,
  });
});

module.exports = router;
