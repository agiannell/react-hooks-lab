import { useState } from 'react';
import AddTodo from './Components/AddTodo'
import List from './Components/List';
import './App.css';

function App() {
  const [todoArr, setTodoArr] = useState([]);

  const addTodo = todo => {
    const newArr = [ ...todoArr, todo ]
    setTodoArr(newArr);
  }

  return (
    <div className="App App-header">
      <AddTodo addTodo={addTodo} />
      <List todoArr={todoArr} />
    </div>
  );
}

export default App;
