const bcrypt = require('bcrypt');
const User = require('../../models/User');

const registerUser = async (req, res) => {
    try {
        const { userName, userEmail, password, role } = req.body;

        // Validate required fields
        if (!userName || !userEmail || !password) {
            return res.status(400).json({
                success: false,
                message: 'All fields (userName, userEmail, password) are required',
            });
        }

        // Check if the user already exists
        const existingUser = await User.findOne({ 
            $or: [{ userEmail }, { userName }] 
        });

        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: 'User name or user email already exists',
            });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new User({
            userName,
            userEmail,
            role: role || 'user', // Default role if not provided
            password: hashedPassword,
        });

        await newUser.save();

        return res.status(201).json({
            success: true,
            message: 'User registered successfully!',
        });
    } catch (error) {
        console.error('Registration Error:', error);
        return res.status(500).json({
            success: false,
            message: 'Internal server error. Please try again later.',
        });
    }
};

module.exports = { registerUser };
