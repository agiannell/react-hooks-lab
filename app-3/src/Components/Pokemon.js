import { useState, useEffect } from 'react';
import axios from 'axios';

const Pokemon = props => {
    const { name } = props.match.params,
          [pokemon, setPokemon] = useState({})

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then(res => {
                setPokemon(res.data)
            })
    }, [name])

    console.log(pokemon);
    return (
        <section className='indiv-pokemon'>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.sprites?.front_default} alt={pokemon.name} />
            <button onClick={props.history.goBack}>Go Back</button>
        </section>
    )
}

export default Pokemon;