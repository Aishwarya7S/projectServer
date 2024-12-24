const mongoose = require('mongoose');

const stockOutSchema = new mongoose.Schema({
    billDate: { type: Date, required: true },
    location: { type: String, required: true },
    itemCode: { type: String, required: true },
    itemName: { type: String, required: true },
    batchCode: { type: String, required: true },
    availableQty: { type: Number, required: true },
    transferQty: { type: Number, required: true },
    gstPercent: { type: Number, required: false },
    mrp: { type: Number, required: true },
    price: { type: Number, required: true },
});


module.exports = mongoose.model('Stockout', stockOutSchema); 
