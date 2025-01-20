import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import generateToken from '../utils/generateToken.js';

// @desc Auth user/set token
// route POST api/users/auth
// @access Public
const authUser = asyncHandler(async(req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({email: email})

    if (user && (await user.matchPassword(password))) {
        generateToken(res, user._id)
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
        }) 
    } else {
        res.status(400);
        throw new Error('Invalid email or password');
    }
});

// @desc  Regiser a new user
// route POST api/users
// @access Public
const registerUser = asyncHandler(async(req, res) => {
    
   
    const  {name, email, password } = req.body;

    const userExists = await User.findOne({ email: email });

    if (userExists) {
        res.status(400);
        throw new Error('User already exists');
    }
    const user = await User.create({
        name: name,
        email: email,
        password: password,
    });

    if (user) {
        generateToken(res, user._id)
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email
        }); 
    } else {
        res.status(400);
        throw new Error('Invalid user data');
    }
   
});

// @desc  Logout User
// route POST api/users/logout
// @access Public
const logoutUser =asyncHandler(async(req, res) => {
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0)
    })
    res.status(200).json({ message: 'User logged out' });
});

// @desc  Get user profile
// route GET api/users/profile
// @access Private
const getUserProfile = asyncHandler(async(req, res) => {

    const user = {
        _id: req.user._id,
        name: req.user.name,
        email: req.user.email
    }

    res.status(200).json(user)
});

// @desc  Update User Profile
// route POST api/users/profile
// @access Private
const updateUserProfile = asyncHandler(async(req, res) => {

    const user = await User.findById(req.user._id)

    if (user) {
            user.name = req.body.name || user.name;
            user.email = req.body.email || user.email;
            if (req.body.password) {
                user.password = req.body.password;
            }
            const updatedUser = await user.save();
            
            res.status(200).json({
                _id:updatedUser._id,
                name: updatedUser.name,
                email: updatedUser.email
            })

    } else {
        res.status(404);
        throw new Error('User not found')
    }
});

export {authUser, 
        registerUser, 
        logoutUser, 
        getUserProfile, 
        updateUserProfile};



// Actual Routes Needed
// - ** POST /api/users** - Register a user
// - ** GET /api/users/auth** - Authenticate a user and get token
// - ** POST /api/users/logout** - Logout a user and clear cookie
// - ** GET /api/users/profile** - Get user profile
// - ** PUT /api/users/profile** - Update profile