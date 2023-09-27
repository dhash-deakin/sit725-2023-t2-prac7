const express = require("express");
const router = express.Router();
const { insertData } = require("../controller/formController");

router.post("/", (req, res) => {
  const formData = req.body;

  insertData(formData)
    .then(() => {
      res.json({ message: "Data inserted successfully" });
    })
    .catch((error) => {
      res.status(500).json({ error: "Error inserting data" });
    });
});

module.exports = router;
