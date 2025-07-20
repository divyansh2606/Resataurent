import express from 'express';
const router = express.Router();
import {sendReservation} from '../controller/reservation.js';
router.post("/send",sendReservation);


export default router;