import path from 'path';
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

dotenv.config();

const app = express();

// Middleware
// app.use(cors({
//   origin: ['http://localhost:3000', 'your-frontend-vercel-url.vercel.app'],
//   credentials: true
// }));

// app.use(cors({
//     origin: [
//       'https://https://coels-frontend.vercel.app/',
//       'http://localhost:3000' // optional for local development
//     ],
//     credentials: true
//  }));

app.use(cors({
    origin: [
      'https://https://coels-frontend.vercel.app', // Your frontend URL
      'https://https://coels-musa-adamus-projects.vercel.app/', // Your backend URL
      'http://localhost:3000' // Optional for local development
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
 }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.use('/api/users', userRoutes);
app.use(notFound);
app.use(errorHandler); // Move error handler after routes

// MongoDB Connection
mongoose.connect(process.env.MONGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Connected to DB"))
.catch(err => console.error(err));

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
    const __dirname = path.resolve();
    app.use(express.static(path.join(__dirname, 'frontend/dist')));
    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html')));
} else {
    app.get('/', (req, res) => res.send('Server is ready'));
}

// Start Server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));