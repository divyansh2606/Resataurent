import mongoose from "mongoose";
import validator from "validator";
const reservationSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: [true, "Please enter your first name"],
        trim: true,
        maxlength: [30, "First name cannot exceed 30 characters"]
    },
    lastName:{
        type: String,
        required: [true, "Please enter your last name"],
        trim: true,
        maxlength: [30, "Last name cannot exceed 30 characters"]
    },
    email:{
        type: String,
        required: [true, "Please enter your email"],
        unique: true,
        validate: [validator.isEmail, "Please enter a valid email"]
    },
    phone:{
        type: String,
        required: [true, "Please enter your phone number"],
        validate: {
            validator: function(v) {
                return /^\d{10}$/.test(v);
            },
            message: "Phone number must be 10 digits"
        }
    },
    time:{
                type: String,
        required: [true, "Please enter the reservation time"],
    },
    date:{
        type:  String,
        required: [true, "Please enter the reservation date"],
    },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);