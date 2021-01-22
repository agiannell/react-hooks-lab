import { useState } from 'react';
import Header from './Components/Header';
import AddTodo from './Components/AddTodo';
import List from './Components/List';
import './reset.css';
import './App.css';

function App() {
  const [ todoArr, setTodoArr ] = useState([]);

  const addItem = item => {
    setTodoArr([ ...todoArr, item ])
  }

  return (
    <main className='main'>
      <Header />
      <section className='content'>
        <AddTodo addFn={addItem} />
        <List todoArr={todoArr} />
      </section>
    </main>
  );
}

export default App;
