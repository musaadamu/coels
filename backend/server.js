// import path from 'path';
// import { fileURLToPath } from 'url';
// import express from 'express';
// import cookieParser from 'cookie-parser';
// import cors from 'cors';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// import userRoutes from './routes/userRoutes.js';
// import studentRoutes from './routes/studentRoutes.js';
// import { notFound, errorHandler } from './middleware/errorMiddleware.js';
// import { mkdirSync } from 'fs';
// import helmet from 'helmet'; // Security middleware
// import rateLimit from 'express-rate-limit'; // Rate limiting

// dotenv.config();

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const app = express();

// // Middleware setup
// app.use(helmet()); // Protects against well-known vulnerabilities
// app.use(cors({
//     origin: [
//         'http://localhost:3000',
//         'https://coels-frontend.vercel.app',
//         'https://coels-musa-adamus-projects.vercel.app',
//     ],
//     methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//     allowedHeaders: ['Content-Type', 'Authorization'],
//     credentials: true,
// }));

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());

// // Rate limiting
// const limiter = rateLimit({
//     windowMs: 15 * 60 * 1000, // 15 minutes
//     max: 100 // Limit each IP to 100 requests per windowMs
// });
// app.use(limiter);

// // Static file serving
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// // Ensure uploads directory exists
// const ensureUploadsDirectory = () => {
//     try {
//         mkdirSync(path.join(__dirname, 'uploads'), { recursive: true });
//     } catch (err) {
//         console.log('Uploads directory already exists');
//     }
// };

// // Routes
// app.use('/api/users', userRoutes);
// app.use('/api', studentRoutes);

// // Error handling middleware
// app.use(notFound);
// app.use(errorHandler);

// // Database connection
// const connectDB = async () => {
//     if (!process.env.MONGO_DB_URL) {
//         console.error("MONGO_DB_URL environment variable is missing.");
//         process.exit(1);
//     }
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

// // Start server
// const startServer = async () => {
//     const port = process.env.PORT || 5000;
//     await connectDB();
//     app.listen(port, () => {
//         console.log(`Server started on port ${port}`);
//         console.log(`Environment: ${process.env.NODE_ENV}`);
//     });
// };

// // Initialize application
// ensureUploadsDirectory();
// startServer().catch(err => {
//     console.error("Server start failed:", err);
//     process.exit(1);
// });

// server.js
// import path from 'path';
// import { fileURLToPath } from 'url';
// import express from 'express';
// import cookieParser from 'cookie-parser';
// import cors from 'cors';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// import userRoutes from './routes/userRoutes.js';
// import studentRoutes from './routes/studentRoutes.js';
// import accommodationRoutes from './routes/accommodationRoutes.js'; // Import accommodation routes
// import { notFound, errorHandler } from './middleware/errorMiddleware.js';
// import { mkdirSync } from 'fs';
// import helmet from 'helmet';
// import rateLimit from 'express-rate-limit';

// dotenv.config();

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const app = express();

// // Middleware setup
// app.use(helmet());
// app.use(cors({
//     origin: ['http://localhost:3000', 'https://coels-frontend.vercel.app', 'https://coels-musa-adamus-projects.vercel.app'],
//     methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//     allowedHeaders: ['Content-Type', 'Authorization'],
//     credentials: true,
// }));

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());

// // Rate limiting
// const limiter = rateLimit({
//     windowMs: 15 * 60 * 1000,
//     max: 100
// });
// app.use(limiter);

// // Static file serving
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// // Ensure uploads directory exists
// const ensureUploadsDirectory = () => {
//     try {
//         mkdirSync(path.join(__dirname, 'uploads'), { recursive: true });
//     } catch (err) {
//         console.log('Uploads directory already exists');
//     }
// };

// // Routes
// app.use('/api/users', userRoutes);
// app.use('/api', studentRoutes);
// app.use('/api', accommodationRoutes); // Add accommodation routes

// // Error handling middleware
// app.use(notFound);
// app.use(errorHandler);

// // Database connection
// const connectDB = async () => {
//     if (!process.env.MONGO_DB_URL) {
//         console.error("MONGO_DB_URL environment variable is missing.");
//         process.exit(1);
//     }
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

// // Start server
// const startServer = async () => {
//     const port = process.env.PORT || 5000;
//     await connectDB();
//     app.listen(port, () => {
//         console.log(`Server started on port ${port}`);
//         console.log(`Environment: ${process.env.NODE_ENV}`);
//     });
// };

// // Initialize application
// ensureUploadsDirectory();
// startServer().catch(err => {
//     console.error("Server start failed:", err);
//     process.exit(1);
// });

// server.js
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import studentRoutes from './routes/studentRoutes.js';
import accommodationRoutes from './routes/accommodationRoutes.js';
import resultsRoutes from './routes/resultsRoutes.js'; // Import results routes
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import { mkdirSync } from 'fs';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware setup
app.use(helmet());
app.use(cors({
    origin: ['http://localhost:3000', 'https://coels-frontend.vercel.app', 'https://coels-musa-adamus-projects.vercel.app'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100
});
app.use(limiter);

// Static file serving
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Ensure uploads directory exists
const ensureUploadsDirectory = () => {
    try {
        mkdirSync(path.join(__dirname, 'uploads'), { recursive: true });
    } catch (err) {
        console.log('Uploads directory already exists');
    }
};

// Routes
app.use('/api/users', userRoutes);
app.use('/api', studentRoutes);
app.use('/api', accommodationRoutes);
app.use('/api', resultsRoutes); // Add results routes

// Error handling middleware
app.use(notFound);
app.use(errorHandler);

// Database connection
const connectDB = async () => {
    if (!process.env.MONGO_DB_URL) {
        console.error("MONGO_DB_URL environment variable is missing.");
        process.exit(1);
    }
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

// Start server
const startServer = async () => {
    const port = process.env.PORT || 5000;
    await connectDB();
    app.listen(port, () => {
        console.log(`Server started on port ${port}`);
        console.log(`Environment: ${process.env.NODE_ENV}`);
    });
};

// Initialize application
ensureUploadsDirectory();
startServer().catch(err => {
    console.error("Server start failed:", err);
    process.exit(1);
});