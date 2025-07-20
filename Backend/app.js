import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import {dbConnection}from'./database/dbConnection.js'; // Assuming this is the correct path to your database connection file
import { errorMiddleware } from './error/error.js';
import reservationRouter from './routes/reservationRoute.js'; // Assuming this is the correct path to your reservation routes
const app= express();

dotenv.config({path: "./config/config.env"});
app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:["POST"],
    credentials:true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/reservation", reservationRouter); // Use the reservation routes
dbConnection(); // Establish the database connection
app.use(errorMiddleware);
export default app;