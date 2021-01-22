const Todo = props => {
    const { item } = props
    return (
        <section>
            <h3>{ item }</h3>
        </section>
    )
}

export default Todo;