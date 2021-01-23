const Character = props => {
    const { character } = props
    return (
        <section className='character'>
            <img src={character.image} alt={character.name} />
            <h1>{character.name}</h1>
        </section>
    )
}

export default Character;