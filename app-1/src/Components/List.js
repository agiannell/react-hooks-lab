import Todo from './Todo';

const List = props => {
    return (
        <section>
            {props.todoArr.map((e, i) => (
                <Todo key={i} todo={e} />
            ))}
        </section>
    )
}

export default List;