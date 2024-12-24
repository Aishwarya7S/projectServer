const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    categoryname: { type: String, required: true },
    categorycode: { type: String, required: true },
    status: { type: String, default: 'Active 0' },
}, { timestamps: true });

const categoryModel = mongoose.model('category', categorySchema);
module.exports = categoryModel;
