import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Components/Header';
import AmiiboList from './Components/AmiiboList';
import './reset.css';
import './App.css';

function App() {
  const [ amiiboArr, setAmiiboArr ] = useState([]);

  useEffect(() => {
    axios.get('https://www.amiiboapi.com/api/amiibo/?amiiboSeries=0x09')
      .then(res => {
        setAmiiboArr(res.data.amiibo);
      })
      .catch(err => console.log(err));
  }, [])

  // console.log(amiiboArr);
  return (
    <main>
      <Header />
      <section>
        <AmiiboList amiiboArr={amiiboArr} />
      </section>
    </main>
  );
}

export default App;
