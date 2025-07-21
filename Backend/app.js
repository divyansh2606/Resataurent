import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

import { dbConnection } from './database/dbConnection.js';
import { errorMiddleware } from './error/error.js';
import reservationRouter from './routes/reservationRoute.js';

const app = express();

// Load environment variables
dotenv.config({ path: './config/config.env' });

// CORS config
app.use(cors({
  origin: [process.env.FRONTEND_URL],
  methods: ['POST'],
  credentials: true,
}));

// Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to DB
dbConnection();

// API routes
app.use('/api/v1/reservation', reservationRouter);

// Serve frontend static files (React build)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distPath = path.join(__dirname, '../dist');

app.use(express.static(distPath));

// Fallback route: serve index.html for any frontend route (SPA support)
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

// Error handling middleware (should be last)
app.use(errorMiddleware);

export default app;
  