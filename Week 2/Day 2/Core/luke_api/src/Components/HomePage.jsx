import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PlanetPage from './PlanetDetails';
import PeoplePage from './PeoplePage';

function HomePage() {
  const [resource, setResource] = useState('characters');
  const [id, setId] = useState('');
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (id.trim() !== '') {
      navigate(`/${resource}/${id}`);
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
      {resource === 'people' && <PeoplePage />}
      {resource === 'planets' && <PlanetPage />}
    </>
  );
}

export default HomePage;
