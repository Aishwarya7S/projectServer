const mongoose = require('mongoose');

const subcategorySchema = new mongoose.Schema({
    categoryName: { type: String, required: true },
    categoryCode: { type: String, required: true },
    subcategoryName: { type: String, required: true },
    subcategoryCode: { type: String, required: true }
}, { timestamps: true });

const Subcategory = mongoose.model('Subcategory', subcategorySchema); // Ensure singular form
module.exports = Subcategory;
