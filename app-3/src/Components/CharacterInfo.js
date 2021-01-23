import { useState, useEffect } from 'react';
import axios from 'axios';

const CharacterInfo = props => {
    const { tail } = props.match.params,
          [character, setCharacter] = useState({})

    useEffect(() => {
        axios.get(`https://www.amiiboapi.com/api/amiibo/?tail=${ tail }`)
            .then(res => {
                setCharacter(res.data.amiibo[0])
            })
    }, [tail])

    console.log(character);
    return (
        <section className='character-info'>
            <img src={character.image} alt={character.name} />
            <section className='info'>
                <h1>Name: {character.name}</h1>
                <h2>Character: {character.character}</h2>
                <h2>Game Series: {character.gameSeries}</h2>
                <h2>US Release: {character.release?.na}</h2>
            </section>
            <button onClick={props.history.goBack}>Go Back</button>
        </section>
    )
}

export default CharacterInfo;