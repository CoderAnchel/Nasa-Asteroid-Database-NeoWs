import logo from './logo.svg';
import './App.css';
import NavBar from './components/main/NavBar';
import { Route, Router, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Asteroid from './components/random/Asteroid';

function App() {
  const [data, setData] = useState([])

  const fetchData = async () => {
    const response = await fetch("https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=P9hGQ1cTPNzuQ0WTH4i5aZDeWcdwBOLcUinOw120");
    const datos = await response.json();

    setData(datos.near_earth_objects)
  }

  useEffect(() => {
    fetchData()
  }, [])

  console.log(data)

  return (
    <div className='app'>
      <h1>Asteroids</h1>
      <div className='container'>
        <div className='asteroids-container'>
          {data.map(asteroid => {
            return(
                <Asteroid
                  id={asteroid.id}
                  name={asteroid.name_limited}
                  fullName={asteroid.name}
                  magnitud={asteroid.absolute_magnitude_h}
                  firstdata={asteroid.orbital_data.first_observation_date}
                  lastdata={asteroid.orbital_data.last_observation_date}
                  peligro={asteroid.is_potentially_hazardous_asteroid}
                />
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
