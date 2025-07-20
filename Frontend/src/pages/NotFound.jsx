import React from 'react';
import { Link } from 'react-scroll';
import{HiOutlineArrowNarrowRight} from 'react-icons/hi';
const NotFound = () => {
  return (
    <>
   <section className='notFound'>
          <div className="container">
            <img src="/notFound.svg" alt="not found" />
            <h1>Looks like you are lost</h1>
            <p>we cant see to find you the page you are looking for</p>
            <Link to={'/'}>Back to Home{" "} <span>
            <HiOutlineArrowNarrowRight />
          
              </span>
              </Link>
          </div>
   </section>
    </>
  );
}

export default NotFound;