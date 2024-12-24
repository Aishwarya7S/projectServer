const mongoose = require('mongoose');

const stockInSchema = new mongoose.Schema({
  billNumber:  { type: String, required: true },
  billDate:    { type: Date, required: true },
  productCode: { type: String, required: true },
  vendorName:  { type: String, required: true },
  itemCode: { type: String, required: true },
  itemName: { type: String, required: true },
  quantity: { type: Number, required: true },
  mrp: { type: Number, required: true },
  cost: { type: Number, required: true },
  gstPercent: { type: Number, required: true },
  cessPercent: { type: Number, required: true },
  discount: { type: Number, required: true },
  total: { type: Number, required: true },
});

module.exports = mongoose.model('Stockin', stockInSchema); 











// const mongoose = require('mongoose');

// const itemSchema = new mongoose.Schema({
//   itemCode:    { type: String, required: true, unique: true },
//   itemName:    { type: String, required: true },
//   quantity:    { type: Number, required: true },
//   mrp:         { type: Number, required: true },
//   cost:        { type: Number, required: true },
//   gstPercent:  { type: Number, required: true },
//   cessPercent: { type: Number, required: true },
//   discount:    { type: Number, required: false, default: 0 },
//   total:       { type: Number, required: true },
// });

// const stockInwardSchema = new mongoose.Schema({
//   stockType:   { type: String, required: true, enum: ['own product', 'other product'] },
//   billNumber:  { type: String, required: true },
//   billDate:    { type: Date, required: true },
//   vendorName:  { type: String, required: true },
//   productCode: { type: String, required: true },
//   totalValue:  { type: Number, required: true },
//   gstValue:    { type: Number, required: true },
//   cessValue:   { type: Number, required: true },
//   grandTotal:  { type: Number, required: true },
//   items:       [itemSchema],
// }, { timestamps: true });

// const StockInward = mongoose.model('StockInward', stockInwardSchema);

// module.exports = StockInward;
