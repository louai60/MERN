import './App.css';
import PersonCard from './Components/PersonCard';

let arr =[
  {"firstName":"Jane", "lastName":"Doe", "age":45, "hairColor":"Black"},
  {"firstName":"John", "lastName":"Smith", "age":88, "hairColor":"Brown"},
  {"firstName":"Millard", "lastName":"Fillmore", "age":50, "hairColor":"Brown"},
  {"firstName":"Maria", "lastName":"Smith", "age":62, "hairColor":"Brown"}
]

const App = () => {
  return (
    <div className="App">
      {arr.map(elm => {
        return (
          <PersonCard 
            firstName={elm.firstName} 
            lastName={elm.lastName} 
            age={elm.age} 
            hairColor={elm.hairColor} 
          />
        )
      })}
    </div>
  );
}

export default App;


