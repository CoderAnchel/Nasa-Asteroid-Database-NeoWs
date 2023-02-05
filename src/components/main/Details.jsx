import React from 'react'
import asteroid from "../assets/Asteroid.png";

const Details = (props) => {
  return (
    <div>
        <div className='bar'>
            <span>{props.id}</span>
            <span>xd</span>
        </div>
        <img src={asteroid} alt="asteroid draw" />
        <h1>{props.name}</h1>
        <div>
            <div>
                <h3>Details</h3>
            </div>
            <h3>Magnitud: {props.magnitud}</h3>
        </div>
    </div>
  )
}

export default Details
