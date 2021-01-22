import { useState } from 'react';

const AddTodo = props => {
    const [ userInput, setUserInput ] = useState('');

    const addTodo = e => {
        e.preventDefault();
        props.addFn(userInput);
        setUserInput('');
    }
    // console.log(props)
    // console.log(userInput)
    return (
        <form onClick={e => addTodo(e)}>
            <input 
                value={userInput} 
                placeholder='Enter To-Do'
                onChange={e => setUserInput(e.target.value)} />
            <button>Add Item</button>
        </form>
    )
}

export default AddTodo;