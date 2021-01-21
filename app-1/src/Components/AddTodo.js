import { useState } from 'react';

const AddTodo = props => {
    const [userInput, setUserInput] = useState('');

    const handleSubmit = () => {
        props.addTodo(userInput);
        setUserInput('');
    }

    // console.log(userInput);
    return (
        <section>
            <input value={userInput} onChange={e => setUserInput(e.target.value)} />
            <button onClick={handleSubmit}>Submit</button>
        </section>
    )
}

export default AddTodo