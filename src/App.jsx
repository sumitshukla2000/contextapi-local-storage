import TodoInput from "./component/todo-input"
import Todos from "./component/todos"


function App() {
  
  return (
    <>
    
    <div className="bg-blue-400 h-screen flex flex-col justify-center items-center">
      <TodoInput/>
      <Todos />      
    </div>
    
    </>
  )
}

export default App
