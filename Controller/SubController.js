const SubcategoryModel = require("../Models/SubModel");

exports.createSubcategory = async (req, res) => {
    const { categoryName, categoryCode, subcategoryName, subcategoryCode } = req.body;
    if (!categoryName || !categoryCode || !subcategoryName || !subcategoryCode) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    try {
        const subcategory = await SubcategoryModel.create({
            categoryName,
            categoryCode,
            subcategoryName,
            subcategoryCode,
        });
        res.status(201).json(subcategory);
    } catch (err) {
        console.error("Error creating subcategory:", err);
        res.status(500).json({ message: 'Error creating subcategory' });
    }
};

exports.getSubcategory = async (req, res) => {
    const id = req.params.id;
    try {
        const subcategory = await SubcategoryModel.findById(id);
        if (!subcategory) return res.status(404).json({ message: 'Subcategory not found' });
        res.status(200).json(subcategory);
    } catch (err) {
        console.error("Error fetching subcategory:", err);
        res.status(500).json({ message: 'Error fetching subcategory' });
    }
};

exports.getSubcategories = async (req, res) => {
    try {
        const subcategories = await SubcategoryModel.find();
        res.status(200).json(subcategories);
    } catch (err) {
        console.error("Error fetching subcategories:", err);
        res.status(500).json({ message: 'Error fetching subcategories' });
    }
};

exports.updateSubcategory = async (req, res) => {
    const { categoryName, categoryCode, subcategoryName, subcategoryCode } = req.body;
    const id = req.params.id;
    try {
        const updatedSubcategory = await SubcategoryModel.findByIdAndUpdate(
            id,
            { categoryName, categoryCode, subcategoryName, subcategoryCode },
            { new: true, runValidators: true } 
        );
        if (!updatedSubcategory) return res.status(404).json({ message: 'Subcategory not found' });
        res.status(200).json(updatedSubcategory);
    } catch (err) {
        console.error("Error updating subcategory:", err);
        res.status(500).json({ message: 'Error updating subcategory' });
    }
};

exports.updateSubcategories = async (req, res) => {
    const { subcategoryName } = req.body;
    const oldSubcategoryName = req.params.uname;
    try {
        const result = await SubcategoryModel.updateMany(
            { subcategoryName: oldSubcategoryName },
            { $set: { subcategoryName } }
        );
        res.status(200).json({ message: 'Subcategories updated successfully', result });
    } catch (err) {
        console.error("Error updating multiple subcategories:", err);
        res.status(500).json({ message: 'Error updating subcategories' });
    }
};

exports.deleteSubcategory = async (req, res) => {
    const id = req.params.id;
    try {
        const deletedSubcategory = await SubcategoryModel.findByIdAndDelete(id);
        if (!deletedSubcategory) return res.status(404).json({ message: 'Subcategory not found' });
        res.status(200).json({ message: 'Subcategory deleted successfully' });
    } catch (err) {
        console.error("Error deleting subcategory:", err);
        res.status(500).json({ message: 'Error deleting subcategory' });
    }
};

exports.deleteSubcategories = async (req, res) => {
    try {
        const result = await SubcategoryModel.deleteMany();
        res.status(200).json({ message: 'All subcategories deleted successfully', result });
    } catch (err) {
        console.error("Error deleting subcategories:", err);
        res.status(500).json({ message: 'Error deleting subcategories' });
    }
};
