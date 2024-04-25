import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './Components/Main/Main';
import CreateAuthor from './Components/CreateAuthor/CreateAuthor';
import UpdateAuthor from './Components/UpdateAuthor/UpdateAuthor';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/authors" element={<Main />}/>
        <Route path="/authors/new" element={<CreateAuthor />}/>
        <Route path="/authors/:id/edit" element={<UpdateAuthor />}/>
      </Routes>
    </div>
  );
}

export default App;
