const express = require("express");
const router = express.Router();
const NewsController = require("../controllers/NewsController");

router.get("/", NewsController.index);
router.post("/add", NewsController.store);
router.delete("/:id", NewsController.delete);
router.put("/edit/:id", NewsController.edit);

module.exports = router;
