import { useEffect, useState } from "react"
// import TodoInput from "./component/TodoInput"
// import Todos from "./component/todos";
import { Todos, TodoInput } from './component'
import { TodoProvider } from "./context"

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => {
      return [...prev, { id: Date.now(), ...todo }]
    });
  }

  const updateTodo = (id, todo) => {
    setTodos(prev => prev.map((prevTodo) => {
      return prevTodo.id === id ? todo : prevTodo
    }))
  }

  const deleteTodo = (id) => {
    setTodos(prev => {
      return prev.filter((prevTodo) => prevTodo.id != id);
    });
  }

  const toggleComplete = (id) => {
    setTodos(prev => {
      return prev.map((prevTodo) => prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo)
    });
  }

  

  //get time localstorge JSON.parse => converts string into json formate s

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  //set item local storage stringify=>converts array into string format as localstorage setitem takes string
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos]);
  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="bg-blue-400 h-screen flex flex-col items-center">
        <TodoInput />
        {
          todos?.map((todo) => (
            <div key={todo.id} className="w-full flex justify-center">
              <Todos todo={todo} />
            </div>
          ))
        }
      </div>
    </TodoProvider>
  )
}

export default App
