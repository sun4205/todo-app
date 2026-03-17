import { useState } from 'react'
import Todolist from './Component/Todolist'
import './App.css'

function App() {
  const [todos,setTodos] = useState<string[]>([]);
  const [input,setInput] = useState('');

  const addTodo = () => {
    if(input.trim()==='') return;
    setTodos([...todos, input]);
    setInput('');
  }

  const removeTodo = (index:number) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  }

  return (
    <div className="app">
    <h1>My Todo App</h1>
    <div className="input-area">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a todo"
      />
      <button onClick={addTodo}>Add</button>
    </div>
    <Todolist todos={todos} removeTodo={removeTodo} />
  </div>
  )
}

export default App
