import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home'
import NumberDisplay from './Components/NumberDisplay'
import WordDisplay from './Components/WorldDisplay'
import ColoredWordDisplay from './Components/ColorWorldDisplay'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:number" element={<NumberDisplay />} />
      <Route path="/hello/:word" element={<WordDisplay />} />
      <Route
        path="/hello/:word/:color1/:color2"
        element={<ColoredWordDisplay />}
      />
    </Routes>
  );
}

export default App;