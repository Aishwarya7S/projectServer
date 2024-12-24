const StockOutward = require('../Models/StockOutModel');

exports.createItem = async (req, res) => {
  try {
    const stockItem = new StockOutward(req.body);
    await stockItem.save();
    res.status(201).json(stockItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getItem = async (req, res) => {
  try {
    const item = await StockOutward.findById(req.params.id);
    if (item) res.status(200).json(item);
    else res.status(404).json({ message: 'Item not found' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getItems = async (req, res) => {
  try {
    const items = await StockOutward.find();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateItem = async (req, res) => {
  try {
    const updatedItem = await StockOutward.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (updatedItem) res.status(200).json(updatedItem);
    else res.status(404).json({ message: 'Item not found' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateItems = async (req, res) => {
  try {
    const updates = req.body;
    const updatedItems = await Promise.all(
      updates.map((item) =>
        StockOutward.findByIdAndUpdate(item.id, item.data, { new: true })
      )
    );
    res.status(200).json(updatedItems);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteItem = async (req, res) => {
  try {
    const deletedItem = await StockOutward.findByIdAndDelete(req.params.id);
    if (deletedItem) res.status(200).json({ message: 'Item deleted' });
    else res.status(404).json({ message: 'Item not found' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteItems = async (req, res) => {
  try {
    await StockOutward.deleteMany();
    res.status(200).json({ message: 'All items deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
