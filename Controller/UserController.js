const User = require('../Models/UserModel');

exports.createUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        const newUser = new User({ username, password });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedUser) return res.status(404).json({ message: 'User not found' });
        res.json(updatedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


exports.updateUsers = async (req, res) => {
    try {
        const { newPassword } = req.body; // Assuming you want to update the password for all users
        const updatedUsers = await User.updateMany({}, { password: newPassword }); // Update all users' passwords
        res.json({ message: 'All users updated successfully', updatedCount: updatedUsers.nModified });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) return res.status(404).json({ message: 'User not found' });
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteUsers = async (req, res) => {
    try {
        const deletedUsers = await User.deleteMany(); // Delete all users
        res.json({ message: 'All users deleted successfully', deletedCount: deletedUsers.deletedCount });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


