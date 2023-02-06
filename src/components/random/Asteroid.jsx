import React from "react";
import "../styles/card.css";
import asteroide from "../assets/polyastero.png";
import asteroid from "../assets/Asteroid.png";

const Asteroid = (props) => {

  let peligrosidad = props.peligro;

  const evaluacion = () => {
    if (peligrosidad === true) {
      return "card-container-red"
    } else if (peligrosidad === false) {
      return "card-container-green"
    }
  }

  return (
    <div className={evaluacion()}>
      <h2 className="id">{props.id}</h2>
      <div className="card">
        <img src={asteroid} alt="asteroide" className="asteroid-img" />
        <div className="content">
          <h1 className="name">{props.name}</h1>
          <h3 className="fullname">{props.fullName}</h3>
          <h4>Magnitud: {props.magnitud}</h4>
          <h4>
            {props.firstdata} - {props.lastdata}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Asteroid;
