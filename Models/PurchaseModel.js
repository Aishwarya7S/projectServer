const mongoose = require('mongoose');

const purchaseSchema = new mongoose.Schema({
    billDate: { type: Date, required: true },
    vendor: { type: String, required: true },
    reason: { type: String, required: true },
    itemCode: { type: String, required: true },
    itemName: { type: String, required: true },
    batchCode: { type: String, required: true },
    availableQty: { type: Number, required: true },
    transferQty: { type: Number, required: true },
    gstPercent: { type: Number, required: false },
    mrp: { type: Number, required: true },
    price: { type: Number, required: true },
});


module.exports = mongoose.model('Purchase', purchaseSchema); 
