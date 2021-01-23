import { Link } from 'react-router-dom';

const Character = props => {
    const { character } = props
    return (
        <section className='character'>
            <Link to={`/character/${character.tail}`}>
                <img src={character.image} alt={character.name} />
            </Link>
            <h1>{character.name}</h1>
        </section>
    )
}

export default Character;