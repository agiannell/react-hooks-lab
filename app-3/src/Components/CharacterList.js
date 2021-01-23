import { useState, useEffect } from 'react'
import axios from 'axios';
import Character from './Character';

const CharacterList = props => {
    const [amiiboArr, setAmiiboArr] = useState([]);

    useEffect(() => {
        axios.get('https://www.amiiboapi.com/api/amiibo/?amiiboSeries=0x09')
          .then(res => {
            setAmiiboArr(res.data.amiibo);
          })
          .catch(err => console.log(err));
    }, [])

    // console.log(amiboArr);
    return (
        <section className='list'>
            { amiiboArr.map(e => (
                <Character key={e.tail} character={e} />
            ))}
        </section>
    )
}

export default CharacterList;