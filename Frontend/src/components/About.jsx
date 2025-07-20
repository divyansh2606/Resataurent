import React from 'react';
import {Link } from 'react-router-dom';
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
const About = () => {
    return (
        <section className="about" id='about'>
            
           <div className="container">
            <div className="banner">
                <div className="top">
                    <h1 className="heading">ABOUT US    </h1>
                    <p>The only thing we are serious about is food...</p>
                </div>
                <p className='mid'>At our restaurant, every dish tells a story — one of flavor, passion, 
                    and perfection. From sizzling starters to mouthwatering mains and decadent desserts, we pour our heart
                     into every bite. We're not just here to fill your plate — we're here to create moments. Whether it's your 
                     first visit or your fiftieth, expect vibrant flavors, cozy vibes, and the kind of service that feels like
                      family. Fresh ingredients, bold recipes, and a love for good food — that’s our secret recipe. So come 
                      hungry, leave happy, and remember… food this good should never be taken lightly. 😉</p>
                       <Link to="/">  Explore Menu  {" "}
                       <span>
                            <HiOutlineArrowNarrowRight/>
                        </span>  
                         </Link>
            </div>


            <div className="banner">
                <img src="/about.png" alt="about" />
            </div>
           </div>



        </section>
    );
}

export default About;