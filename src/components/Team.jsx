
import React from 'react';
import{data} from '../restApi.json';
const Team=()=>{
 return(
   <section  className="team" id="team">
    <div className="container">
        <div className="heading_section">
            <h1 className='heading'> Our Team   </h1>
            <p>Meet the team behind the magic — the hands and hearts that make your food unforgettable!</p>
        </div>
        <div className="team_container">
            {
                data[0].team.map(element=>{
                    return(
                        <div className="card" key={element.id}>
                            <img src={element.image} alt={element.name} />
                            <h3>{element.name}</h3>
                            <p>{element.designation}</p>
                        </div>
                    )
                })
            }
        </div>
    </div>
   </section>

 )   
}

export default Team;