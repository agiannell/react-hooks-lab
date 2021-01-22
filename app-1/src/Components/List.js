import Todo from './Todo';

const List = props => {
    const { todoArr } = props
    return (
        <section>
            <h1>To-Do List:</h1>
            { todoArr.map((e, i) => (
                <Todo key={i} item={e} />
            )) }
        </section>
    )
}

export default List;