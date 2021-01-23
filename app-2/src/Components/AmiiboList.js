import Character from './Character';

const AmiiboList = props => {
    const { amiiboArr } = props
    return (
        <section className='list'>
            { amiiboArr.map((e, i) => (
                <Character key={i} character={e} />
            )) }
        </section>
    )
}

export default AmiiboList;