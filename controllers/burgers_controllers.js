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

router.post("/", (req, res) => {
  burger.insertOne(req.body.burger_name, () => {
    res.redirect("/");
  });
});

router.put("/:id", (req, res) => {
  const id = req.params.id;

  console.log("id", id);

  burger.updateOne(id, () => {
    res.redirect("/");
  });
});

module.exports = router;
