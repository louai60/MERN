import React, { useState } from 'react';
import axios from 'axios';

function HomePage() {
  const [resource, setResource] = useState('people');
  const [id, setId] = useState('');
  const [data, setData] = useState(null);
  const [error, setError] = useState('');

  const fetchData = () => {
    axios
      .get(`https://www.swapi.tech/api/${resource}/${id}`)
      .then((response) => {
        setData(response.data);
        setError('');
      })
      .catch((error) => {
        setData(null);
      });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (id.trim() !== '') {
      fetchData();
    }
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <select value={resource} onChange={(e) => setResource(e.target.value)}>
          <option value="people">People</option>
          <option value="planets">Planets</option>
        </select>
        <input type="number" value={id} onChange={(e) => setId(e.target.value)} />
        <button type="submit">Search</button>
      </form>
      {error && <p>{error}</p>}
      {data && (
        <div>
          {resource === 'people' && (
            <>
               <h2>{data.name}</h2>
              <p>Height: {data.height}</p>
              <p>Mass: {data.mass}</p>
              <p>Gender: {data.gender}</p>
            </>
          )}
          {resource === 'planets' && (
            <>
                  <h2>{data.name}</h2>
                  <p>Climate: {data.climate}</p>
                  <p>Terrain: {data.terrain}</p>
                  <p>Surface Water: {data.surface_water}</p>
                  <p>Population: {data.population}</p>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default HomePage;
