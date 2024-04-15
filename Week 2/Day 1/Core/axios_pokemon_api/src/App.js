import { useState } from 'react';
import './App.css';
import axios from "axios"


function App() {

  const [Pokemons, setPokemons] = useState([])



  // Fetching data with Axios 
  const AxiosPokemons = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
      .then((res) => {
        console.log(res.data.results)
        setPokemons(res.data.results) 
      }).catch((err) => {
        console.log("❌❌❌❌❌❌", err)
      })
  }


  return (
    <div className="App">
      <p></p>
      <button onClick={AxiosPokemons}>Fetch Pokemon</button>
      <hr />

      <ul>
        {
          Pokemons.map((Pokemon) => {
            return (
                <li>{Pokemon.name}</li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default App;