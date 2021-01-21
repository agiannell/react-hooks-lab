import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

const PokemonList = props => {
    const [pokemonArr, setPokemonArr] = useState([]);

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon')
            .then(res => {
                setPokemonArr(res.data.results)
            })
            .catch(err => console.log(err));
    }, [])

    // console.log(pokemonArr);
    return (
        <main>
            <h1>Pokemon List</h1>
            { pokemonArr.map(e => (
                <Link key={e.url} to={`/pokemon/${e.name}`}>
                    <h4>{e.name}</h4>
                </Link>
            ))}
        </main>
    )
}

export default PokemonList;