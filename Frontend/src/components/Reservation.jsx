import React from 'react';
import{HiOutlineArrowNarrowRight} from 'react-icons/hi'
import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
const Reservation=()=>{
    const[firstName,setFirstName]=useState("");
    const[lastName,setLastName]=useState("");
    const[email,setEmail]=useState("");
    const[phone,setPhone]=useState(0);
    const[time,setTime]=useState("");
    const[date,setDate]=useState("");
     const navigate=useNavigate();


    const haandleReservation=async(e)=>{
                e.preventDefault();
                try{
                       const {data} = await axios.post("http://localhost:4000/api/v1/reservation/send",
                        {
                            firstName,
                            lastName,
                            email,
                            phone,
                            time,
                            date
                        },
                    {
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        withCredentials: true
                    }
                    
                    
                    );
                    toast.success("data.message");
                    setFirstName("");
                    setLastName("");
                    setEmail("");
                    setPhone(0);
                    setTime("");
                    setDate("");
                    navigate("/success");
                }
                catch(error){
                    toast.error(error.response.data.message || "Something went wrong");
                    console.error("Error during reservation:", error);
                }
    }
    return(
        <section className="reservation" id="reservation">
<div className="container">
    <div className="banner">
        <img src="reservation.png" alt="res" />
    </div>
    <div className="banner">
        <div className="reservation_form_box">
            <h1>Make a Reservation</h1>
            <p>for further questions , please call on 7440372787</p>
            <form action="">
                <div>
                    <input 
                    type="text"
                     placeholder='First Name' 
                     value={firstName} 
                     onChange={(e)=>setFirstName(e.target.value)}

                    />
                        <input 
                    type="text"
                     placeholder='Last Name' 
                     value={lastName} 
                     onChange={(e)=>setLastName(e.target.value)}

                    />

                </div>
                <div>
                    <input type="date" placeholder='Date' value={date} onChange={(e)=>setDate(e.target.value)}/>
                    <input type="time" placeholder='Time' value={time} onChange={(e)=>setTime(e.target.value)}/>
                </div>
                <div>
   <input   type="email"   placeholder='Email' className='email_tag'    value={email} onChange={(e)=>setEmail(e.target.value)}
                    />
                    <input 
                    type="number" 
                    placeholder='Phone' 
                    value={phone} 
                    onChange={(e)=>setPhone(e.target.value)}
                    />
                   
                </div>
                 <button type='submit' onClick={haandleReservation}>Reserve now 
                        <span>
                            <HiOutlineArrowNarrowRight/>
                        </span>
                        </button>
            </form>
        </div>
    </div>
</div>
        </section>
    );
};
export default Reservation;