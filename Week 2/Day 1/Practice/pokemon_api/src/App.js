import { useState } from 'react';
import './App.css';

function App() {

  const [Heroes, setHeroes] = useState([])



  // Vanilla Javascript
  const FetchHeroes = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
      .then(response => {
        return response.json()
        //do something
      }).then((JsonResponse) => {
        console.log(JsonResponse)
        setHeroes(JsonResponse.results)
      })
      .catch(err => {
        console.log(err);
      })
  }




  return (
    <div className="App">
      <p></p>
      <button onClick={FetchHeroes}>Fetch Pokemon</button>
      <hr />

      <ul>
        {
          Heroes.map((hero) => {
            return (
                <li>{hero.name}</li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default App;