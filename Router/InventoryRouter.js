const express = require('express');
const router = express.Router();
const { createInventory, getInventory, getInventories,updateInventory, updateInventories, deleteInventory, deleteInventories } =require('../Controller/InventoryControlller')

router.post("/createInventory", createInventory);
router.get("/getInventory/:id", getInventory);
router.get("/getInventories", getInventories);
router.put("/updateInventory/:id", updateInventory);  
router.put("/updateInventories/:uname", updateInventories);  
router.delete("/deleteInventory/:id", deleteInventory);
router.delete("/deleteInventories", deleteInventories);
module.exports = router;
