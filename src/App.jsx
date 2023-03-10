import "./App.css";
import { useEffect, useState } from "react";
import Asteroid from "./components/random/Asteroid";
import Footer from "./components/main/Footer";
import NavBar from "./components/main/NavBar";
import { Route, Routes } from "react-router-dom";
import Details from "./components/main/Details";


const Search  = () => <h1>hola</h1>

function App() {
  const [data, setData] = useState([]);
  const [url, setUrl] = useState(
    "https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=z0XmGeqbzcGyEs87TUMBCDJbaYU7MZlrbsEAajGt"
  );
  const [selectors, setSelectors] = useState([]);

  const fetchData = async () => {
    let response = await fetch(url);
    let datos = await response.json();

    setSelectors(datos.links);
    setData(datos.near_earth_objects);
  };

  useEffect(() => {
    fetchData();
  });

  const updatePage = async () => {
    const nextPage = await selectors.next;
    setUrl(nextPage);
  };

  const returnPage = async () => {
    if (selectors.prev) {
      const previous = await selectors.prev;
      setUrl(previous);
    } else {
      return alert("You are at the first page");
    }
  };

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={App}/>
        <Route path="/search" element={<Search />}/>
      </Routes>
      <NavBar />

      <div className="landing">
        <span className="ticket">Nasa Asteroids - NeoWs</span>
        <h1 className="title">Asteroid Database</h1>
      </div>

      <div className="buttons">
        <button className="button-30" onClick={returnPage}>
          Previous
        </button>
        <button className="button-30" onClick={updatePage}>
          Next
        </button>
      </div>

      <div className="container">
        <div className="asteroids-container">
          {data.map((asteroid) => {
            return (
              <Asteroid
                id={asteroid.id}
                name={asteroid.name_limited}
                fullName={asteroid.name}
                magnitud={asteroid.absolute_magnitude_h}
                firstdata={asteroid.orbital_data.first_observation_date}
                lastdata={asteroid.orbital_data.last_observation_date}
                peligro={asteroid.is_potentially_hazardous_asteroid}
              />
            );
          })}
        </div>
      </div>

      <div className="buttons">
        <button className="button-30" onClick={returnPage}>
          Previous
        </button>
        <button className="button-30" onClick={updatePage}>
          Next
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default App;
