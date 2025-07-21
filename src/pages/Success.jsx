
import React, { use } from 'react';
import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {  HiOutlineArrowNarrowRight} from 'react-icons/hi';
const Success = () => {
  const [countdown, setCountdown] =useState(10);
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate('/');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [navigate]);
  return (
    <>
    <section className='notFound'>
                <div className="caontainer">
                  <img src="/sandwich.png" alt="success" />
                  <h1>Redirecting to home in { countdown} seconds...</h1>
                  <Link to={"/"}>Back to home  <HiOutlineArrowNarrowRight/>    </Link>
                </div>
    </section>
    </>
  );
}

export default Success;