const categoryModel = require("../Models/CategoryModel");

exports.createCategory = async (req, res) => {
    const { categoryname, categorycode } = req.body;
    try {
        const category = await categoryModel.create({
            categoryname,
            categorycode,
            status: 'Active 0' 
        });
        res.status(201).json(category);  
    } catch (err) {
        console.error("Error creating category:", err);
        res.status(500).json({ message: 'Error creating category' });
    }
};

exports.getCategory = async (req, res) => {
    const id = req.params.id;
    try {
        const category = await categoryModel.findById(id);
        if (!category) return res.status(404).json({ message: 'Category not found' });
        res.status(200).json(category);
    } catch (err) {
        console.error("Error fetching category:", err);
        res.status(500).json({ message: 'Error fetching category' });
    }
};

exports.getCategories = async (req, res) => {
    try {
        const categories = await categoryModel.find();
        res.status(200).json(categories);
    } catch (err) {
        console.error("Error fetching categories:", err);
        res.status(500).json({ message: 'Error fetching categories' });
    }
};

exports.updateCategory = async (req, res) => {
    const { categoryname, categorycode, status } = req.body;
    const id = req.params.id;
    try {
        const updatedCategory = await categoryModel.findByIdAndUpdate(id, {
            categoryname,
            categorycode,
            status
        }, { new: true });

        if (!updatedCategory) return res.status(404).json({ message: 'Category not found' });
        res.status(200).json(updatedCategory);
    } catch (err) {
        console.error("Error updating category:", err);
        res.status(500).json({ message: 'Error updating category' });
    }
};

exports.updateCategories = async (req, res) => {
    const { categoryname } = req.body;
    const oldCategoryName = req.params.uname;
    try {
        const result = await categoryModel.updateMany({ categoryname: oldCategoryName }, { $set: { categoryname } });
        res.status(200).json(result);
    } catch (err) {
        console.error("Error updating multiple categories:", err);
        res.status(500).json({ message: 'Error updating categories' });
    }
};

exports.deleteCategory = async (req, res) => {
    const id = req.params.id;
    try {
        const deletedCategory = await categoryModel.findByIdAndDelete(id);
        if (!deletedCategory) return res.status(404).json({ message: 'Category not found' });
        res.status(200).json({ message: 'Category deleted successfully' });
    } catch (err) {
        console.error("Error deleting category:", err);
        res.status(500).json({ message: 'Error deleting category' });
    }
};

exports.deleteCategories = async (req, res) => {
    try {
        const result = await categoryModel.deleteMany();
        res.status(200).json({ message: 'All categories deleted successfully', result });
    } catch (err) {
        console.error("Error deleting categories:", err);
        res.status(500).json({ message: 'Error deleting categories' });
    }
};
