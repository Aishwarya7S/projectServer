const express = require('express');
const router = express.Router();
const { createCategory, getCategory, getCategories, updateCategory, updateCategories, deleteCategory, deleteCategories } = require('../Controller/CategoryController');

router.post("/createCategory", createCategory);
router.get("/getCategory/:id", getCategory);
router.get("/getCategories", getCategories);
router.put("/updateCategory/:id", updateCategory);
router.put("/updateCategories/:uname", updateCategories);
router.delete("/deleteCategory/:id", deleteCategory);
router.delete("/deleteCategories", deleteCategories);

module.exports = router;
