import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function PeoplePage() {
  const { id } = useParams();
  const [people, setPeople] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`https://www.swapi.tech/api/people/${id}`)
      .then((response) => {
        setPeople(response.data);
        setError(null);
      })
      .catch((error) => {
        setPeople(null);
        setError('These aren\'t the droids you\'re looking for');
      });
  }, [id]);

  if (error) {
    return (
      <div>
        <img src="path_to_obi_wan_image.jpg" alt="Obi-Wan Kenobi" />
        <p>{error}</p>
      </div>
    );
  }

  if (!people) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{people.name}</h2>
      <p>Height: {people.height}</p>
      <p>Mass: {people.mass}</p>
      <p>Gender: {people.gender}</p>
      {/* Render other attributes as needed */}
    </div>
  );
}

export default PeoplePage;
