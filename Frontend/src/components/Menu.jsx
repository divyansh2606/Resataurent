

import React from 'react';
import {data} from '../restApi.json';

const Menu = () => {
    return (
        <section className="menu" id="menu">
            <div className="container">
                <div className="heading_section">
                    <h1 className="heading">Popular Dishes </h1>
                    <p>Here’s what everyone’s been craving — our top picks and most popular dishes</p>
                </div>
                <div className="dishes_container">
                    {
                        data[0].dishes.map(element=>{
                            return(
                                <div className="card" key={element.id}>
                                       <img src={element.image} alt={element.title} />
                                       <h3>{element.title}</h3>
                                       <button>{element.category}</button>
                                </div>
                            )
                        })
                    }
                   
            </div>
            </div>
        </section>
    );
}
export default Menu;