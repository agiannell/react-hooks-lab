import { useState, useEffect } from 'react';
import axios from 'axios';
import Character from './Components/Character';
import './App.css';

function App() {
  const [characterArr, setCharacterArr] = useState([]);

  const getCharacters = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon/')
      .then(res => {
        setCharacterArr(res.data.results)
      })
      .catch(err => console.log(err));
  }

  useEffect(() => {
    getCharacters();
  }, []);

  // console.log(characterArr);
  return (
    <div className="App App-header">
      {characterArr.map((e, i) => (
        <Character key={i} pokemon={e} />
      ))}
    </div>
  );
}

export default App;
