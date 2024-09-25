const express = require("express");
const animerouter = express.Router();

animerouter.get("/", (req, res) => {
  res.json({
    status: "Success",
    message: "Data is fetched",
  });
});
animerouter.post("/:id", (req, res) => {
  res.json({
    status: "Success",
    message: "Data is added",
  });
});
animerouter.put("/:id", (req, res) => {
  res.json({
    status: "Success",
    message: "Data is updated",
  });
});
animerouter.delete("/:id", (req, res) => {
  res.json({
    status: "Success",
    message: "Data is deleted",
  });
});

module.exports = animerouter;
