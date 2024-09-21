import { useState } from "react"
import TodoInput from "./component/todo-input"
import Todos from "./component/todos"
import { TodoProvider } from "./context"

function App() {
  const [todos , setTodos] = useState([]);

  const addTodo = (todo) => {
      setTodos(prev => {
        [...prev , { id: Date.now() , ...todo }]
      });
  }

  const updateTodo = (id, todo) => {
    setTodos(prev => prev.map((prevTodo) => {
      prevTodo.id === id ? todo : prevTodo
    }))
  }

  const deleteTodo = (id) => {
      setTodos(prev => {
        prev.filter((prevTodo) => prevTodo.id != id);
      });
  }

  const toggleComplete = (id) => {
      setTodos(prev => {
        prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo , completed : !prevTodo.completed} : prevTodo )
      });
  }


  return (
    <TodoProvider value={{todos, addTodo, updateTodo , deleteTodo, toggleComplete}}>
    <div className="bg-blue-400 h-screen flex flex-col justify-center items-center">
      <TodoInput/>
      <Todos />      
    </div>
    
    </TodoProvider>
  )
}

export default App
