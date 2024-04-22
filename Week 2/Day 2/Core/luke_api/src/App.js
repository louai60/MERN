import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PlanetDetails from './Components/PlanetDetails';
import HomePage from './Components/HomePage';
import PeoplePage from './Components/PeoplePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/characters/:id" element={<PeoplePage/>} />
      <Route path="/planets/:id" element={<PlanetDetails/>} />
    </Routes>
  );
}

export default App;
