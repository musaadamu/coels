// // import express from 'express';
// // const router = express.Router();
// // import {authUser, registerUser, logoutUser, getUserProfile, updateUserProfile} from '../controllers/userController.js';
// // import {protect} from '../middleware/authMiddleware.js'

// // router.post('/auth', authUser);
// // router.post('/register', registerUser);
// // router.post('/login', logoutUser);
// // router.get('/profile', protect, getUserProfile);
// // router.put('/profile', protect, updateUserProfile);

// // // router.route('/profile')
// // // .get(protect, getUserProfile)
// // // .put(protect, updateUserProfile);

// // export default router;

import express from "express";
const router = express.Router();
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

// Authentication routes
router.post("/auth", authUser); // Authenticate user (login)
router.post("/register", registerUser); // Register new user
router.post("/logout", logoutUser); // Logout user

// User profile routes
router
  .route("/profile")
  .get(protect, getUserProfile) // Get user profile (protected)
  .put(protect, updateUserProfile); // Update user profile (protected)

export default router;







// const express = require("express");
// const router = express.Router();
// const {
//   authUser,
//   registerUser,
//   logoutUser,
//   getUserProfile,
//   updateUserProfile,
// } = require("../controllers/userController.js");
// const { protect } = require("../middleware/authMiddleware.js");

// // Authentication routes
// router.post("/auth", authUser); // Authenticate user (login)
// router.post("/register", registerUser); // Register new user
// router.post("/login", logoutUser); // Logout user

// // User profile routes
// router
//   .route("/profile")
//   .get(protect, getUserProfile) // Get user profile (protected)
//   .put(protect, updateUserProfile); // Update user profile (protected)

// module.exports = router;
