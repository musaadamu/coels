import jwt  from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

const protect = asyncHandler(async (req, res, next) => {
    let token;

    token = req.cookies.jwt;

    if (token) {
            try {
                const decoded = jwt.verify(token, process.env.JWT_SECRET);
                req.user = await User.findById(decoded.userId).select('-password');
                
                next();
            } catch (error) {
                res.status(401);
                throw new Error('Not authorized, invalid token')
            }
    } else {
        res.status(401);
        throw new Error('Not authorized, no token');
    }
})

export { protect };

// import jwt from "jsonwebtoken";
// import asyncHandler from "express-async-handler";
// import User from "../models/userModel.js";

// const protect = asyncHandler(async (req, res, next) => {
//   const token = req.cookies?.jwt;

//   if (!token) {
//     res.status(401);
//     throw new Error("Not authorized, no token");
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);

//     // Fetch the user and exclude the password field
//     req.user = await User.findById(decoded.userId).select("-password");

//     if (!req.user) {
//       res.status(404);
//       throw new Error("User not found");
//     }

//     next();
//   } catch (error) {
//     console.error("Token validation error:", error.message);
//     res.status(401);
//     throw new Error("Not authorized, invalid token");
//   }
// });

// export { protect };






// const jwt = require("jsonwebtoken");
// const asyncHandler = require("express-async-handler");
// const User = require("../models/userModel.js");

// const protect = asyncHandler(async (req, res, next) => {
//   const token = req.cookies?.jwt;

//   if (!token) {
//     res.status(401);
//     throw new Error("Not authorized, no token");
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);

//     // Fetch the user and exclude the password field
//     req.user = await User.findById(decoded.userId).select("-password");

//     if (!req.user) {
//       res.status(404);
//       throw new Error("User not found");
//     }

//     next();
//   } catch (error) {
//     console.error("Token validation error:", error.message);
//     res.status(401);
//     throw new Error("Not authorized, invalid token");
//   }
// });

// module.exports = { protect };
