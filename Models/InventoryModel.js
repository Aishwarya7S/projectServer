const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
    categoryName: { type: String, required: true },
    subcategoryName: { type: String, required: true },
    productName: { type: String, required: true },
    cost: { type: Number, required: true },
    markedPrice: { type: Number, required: true },
    minLevel: { type: Number, required: true },
    minOrder: { type: Number, required: true },
    hsnCode: { type: String, required: true },
    gst: { type: Number, required: true },
    quantity: { type: Number, required: true }
});

const inventory= mongoose.model('Inventory', inventorySchema);
module.exports =inventory;