// import path from 'path';

// import { fileURLToPath } from 'url';
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// import express from 'express';
// import cookieParser from 'cookie-parser';
// import cors from 'cors';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// import userRoutes from './routes/userRoutes.js';
// import { notFound, errorHandler } from './middleware/errorMiddleware.js';

// dotenv.config();

// const app = express();


// app.use(cors({
//     origin: [
//       'http://localhost:3000',
//       'https://coels-frontend.vercel.app', 
//       'https://coels-musa-adamus-projects.vercel.app'
//     ],
//     methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//     allowedHeaders: ['Content-Type', 'Authorization'],
//     credentials: true
// }));


// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());

// // Routes
// app.use('/api/users', userRoutes);
// app.use(notFound);
// app.use(errorHandler); // Move error handler after routes

// const connectDB = async () => {
//     try {
//         await mongoose.connect(process.env.MONGO_DB_URL, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         });
//         console.log("Connected to DB");
//     } catch (err) {
//         console.error("DB Connection Error:", err);
//         process.exit(1);
//     }
// };

// // Add global error handlers
// process.on('uncaughtException', (error) => {
//     console.error('Uncaught Exception:', error);
// });

// process.on('unhandledRejection', (reason, promise) => {
//     console.error('Unhandled Rejection at:', promise, 'reason:', reason);
// });


// // Serve static files in production
// if (process.env.NODE_ENV === 'production') {
//     const __dirname = path.resolve();
//     app.use(express.static(path.join(__dirname, 'frontend/dist')));
//     app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html')));
// } else {
//     app.get('/', (req, res) => res.send('Server is ready'));
// }

// // Start Server
// const port = process.env.PORT || 5000;
// app.listen(port, () => console.log(`Server started on port ${port}`));

// import path from 'path';
// import { fileURLToPath } from 'url';
// import express from 'express';
// import cookieParser from 'cookie-parser';
// import cors from 'cors';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// import userRoutes from './routes/userRoutes.js';
// import { notFound, errorHandler } from './middleware/errorMiddleware.js';

// dotenv.config();

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const app = express();

// // Comprehensive error handling
// process.on('uncaughtException', (error) => {
//     console.error('Uncaught Exception:', error);
// });

// process.on('unhandledRejection', (reason, promise) => {
//     console.error('Unhandled Rejection at:', promise, 'reason:', reason);
// });

// app.use(cors({
//     origin: [
//       'https://coels-frontend.vercel.app', 
//       'https://coels-musa-adamus-projects.vercel.app', 
//       'http://localhost:3000', // Add this line
//       'localhost:3000'
//     ],
//     methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//     allowedHeaders: ['Content-Type', 'Authorization'],
//     credentials: true
// }));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());

// // Routes
// app.use('/api/users', userRoutes);
// app.use(notFound);
// app.use(errorHandler);

// // MongoDB Connection with more detailed error handling
// const connectDB = async () => {
//     try {
//         await mongoose.connect(process.env.MONGO_DB_URL, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         });
//         console.log("Connected to DB");
//     } catch (err) {
//         console.error("DB Connection Error:", err);
//         process.exit(1);
//     }
// };

// // Serve static files in production
// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static(path.join(__dirname, 'frontend/dist')));
//     app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html')));
// } else {
//     app.get('/', (req, res) => res.send('Server is ready'));
// }

// // Start Server
// const port = process.env.PORT || 5000;
// connectDB().then(() => {
//     app.listen(port, () => console.log(`Server started on port ${port}`));
// }).catch(err => {
//     console.error("Server start failed:", err);
// });


// import path from 'path';
// import { fileURLToPath } from 'url';
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// import express from 'express';
// import cookieParser from 'cookie-parser';
// import cors from 'cors';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// import userRoutes from './routes/userRoutes.js';
// import { notFound, errorHandler } from './middleware/errorMiddleware.js';

// dotenv.config();

// const app = express();

// app.use(cors({
//     origin: [
//       'http://localhost:3000',
//       'https://coels-frontend.vercel.app', 
//       'https://coels-musa-adamus-projects.vercel.app'
      
//     ],
//     methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//     allowedHeaders: ['Content-Type', 'Authorization'],
//     credentials: true
// }));

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());

// // Routes
// app.use('/api/users', userRoutes);
// app.use(notFound);
// app.use(errorHandler);

// // Database Connection
// const connectDB = async () => {
//     try {
//         await mongoose.connect(process.env.MONGO_DB_URL, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         });
//         console.log("Connected to DB");
//     } catch (err) {
//         console.error("DB Connection Error:", err);
//         process.exit(1);
//     }
// };

// // Global Error Handlers
// process.on('uncaughtException', (error) => {
//     console.error('Uncaught Exception:', error);
// });

// process.on('unhandledRejection', (reason, promise) => {
//     console.error('Unhandled Rejection at:', promise, 'reason:', reason);
// });

// // Serve static files in production
// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static(path.join(__dirname, 'frontend/dist')));
//     app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html')));
// } else {
//     app.get('/', (req, res) => res.send('Server is ready'));
// }

// // Start Server
// const port = process.env.PORT || 5000;
// connectDB().then(() => {
//     app.listen(port, () => console.log(`Server started on port ${port}`));
// }).catch(err => {
//     console.error("Server start failed:", err);
// });

import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// CORS configuration
app.use(cors({
    origin: [
        'http://localhost:3000',
        'https://coels-frontend.vercel.app',
        'https://coels-musa-adamus-projects.vercel.app',
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
}));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.use('/api/users', userRoutes);
app.use(notFound);
app.use(errorHandler); // Place error handler middleware after routes

// Database Connection
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to DB");
    } catch (err) {
        console.error("DB Connection Error:", err);
        process.exit(1);
    }
};

// Global Error Handlers
process.on('uncaughtException', (error) => {
    console.error('Uncaught Exception:', error);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'frontend/dist')));
    app.get('*', (req, res) =>
        res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'))
    );
} else {
    app.get('/', (req, res) => res.send('Server is ready'));
}

// Start Server
const port = process.env.PORT || 5000;
connectDB()
    .then(() => {
        app.listen(port, () => console.log(`Server started on port ${port}`));
    })
    .catch((err) => {
        console.error("Server start failed:", err);
    });













// const path = require("path");
// const express = require("express");
// const cookieParser = require("cookie-parser");
// const cors = require("cors");
// const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// const userRoutes = require("./routes/userRoutes.js");
// const { notFound, errorHandler } = require("./middleware/errorMiddleware.js");

// dotenv.config();

// const app = express();

// // CORS configuration
// app.use(
//     cors({
//         origin: [
//             "http://localhost:3000",
//             "https://coels-frontend.vercel.app",
//             "https://coels-musa-adamus-projects.vercel.app",
//         ],
//         methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//         allowedHeaders: ["Content-Type", "Authorization"],
//         credentials: true,
//     })
// );

// // Middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());

// // Routes
// app.use("/api/users", userRoutes);
// app.use(notFound);
// app.use(errorHandler); // Place error handler middleware after routes

// // Database Connection
// const connectDB = async () => {
//     try {
//         await mongoose.connect(process.env.MONGO_DB_URL, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log("Connected to DB");
//     } catch (err) {
//         console.error("DB Connection Error:", err);
//         process.exit(1);
//     }
// };

// // Global Error Handlers
// process.on("uncaughtException", (error) => {
//     console.error("Uncaught Exception:", error);
// });

// process.on("unhandledRejection", (reason, promise) => {
//     console.error("Unhandled Rejection at:", promise, "reason:", reason);
// });

// // Serve static files in production
// if (process.env.NODE_ENV === "production") {
//     app.use(express.static(path.join(__dirname, "frontend", "dist")));
//     app.get("*", (req, res) =>
//         res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
//     );
// } else {
//     app.get("/", (req, res) => res.send("Server is ready"));
// }

// // Start Server
// const port = process.env.PORT || 5000;
// connectDB()
//     .then(() => {
//         app.listen(port, () => console.log(`Server started on port ${port}`));
//     })
//     .catch((err) => {
//         console.error("Server start failed:", err);
//     });
