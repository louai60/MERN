import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function PlanetPage() {
  const { id } = useParams();
  const [planet, setPlanet] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`https://www.swapi.tech/api/planets/${id}`)
      .then((response) => {
        setPlanet(response.data);
        setError(null);
      })
      .catch((error) => {
        setPlanet(null);
        setError('The planet you are looking for does not exist');
      });
  }, [id]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!planet) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{planet.name}</h2>
      <p>Climate: {planet.climate}</p>
      <p>Population: {planet.population}</p>
    </div>
  );
}

export default PlanetPage;
