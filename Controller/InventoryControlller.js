const Inventory = require('../Models/InventoryModel');

exports.createInventory = async (req, res) => {
    try {
        const newInventory = new Inventory(req.body);
        const savedInventory = await newInventory.save();
        res.status(201).json(savedInventory);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getInventories = async (req, res) => {
    try {
        const inventories = await Inventory.find();
        res.json(inventories);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getInventory = async (req, res) => {
    try {
        const inventory = await Inventory.findById(req.params.id);
        if (!inventory) return res.status(404).json({ message: 'Inventory item not found' });
        res.json(inventory);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateInventory = async (req, res) => {
    try {
        const updatedInventory = await Inventory.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updatedInventory) return res.status(404).json({ message: 'Inventory item not found' });
        res.json(updatedInventory);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.updateInventories = async (req, res) => {
    try {
        const { categoryName } = req.body;
        const result = await Inventory.updateMany({ categoryName: req.params.uname }, { $set: { categoryName } });
        res.json({ message: `${result.modifiedCount} inventory items updated.` });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteInventory = async (req, res) => {
    try {
        const deletedInventory = await Inventory.findByIdAndDelete(req.params.id);
        if (!deletedInventory) return res.status(404).json({ message: 'Inventory item not found' });
        res.json({ message: 'Inventory item deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteInventories = async (req, res) => {
    try {
        await Inventory.deleteMany();
        res.json({ message: 'All inventory items deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
