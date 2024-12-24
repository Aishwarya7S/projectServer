const express = require('express');
const router = express.Router();
const { createSubcategory, getSubcategory, getSubcategories, updateSubcategory, updateSubcategories, deleteSubcategory, deleteSubcategories } = require('../Controller/SubController');

router.post("/createSubcategory", createSubcategory);
router.get("/getSubcategory/:id", getSubcategory);
router.get("/getSubcategories", getSubcategories);
router.put("/updateSubcategory/:id", updateSubcategory);  
router.put("/updateSubcategories/:uname", updateSubcategories);  
router.delete("/deleteSubcategory/:id", deleteSubcategory);
router.delete("/deleteSubcategories", deleteSubcategories);

module.exports = router;

