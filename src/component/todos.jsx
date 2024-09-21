import { useState } from 'react';
import { useTodo } from '../context';

const Todos = ({ todo }) => {
    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const [todoMsg, setTodoMsg] = useState(todo.todo)

    const { updateTodo, deleteTodo, toggleComplete } = useTodo();

    const editTodo = () => {
        updateTodo(todo.id, { ...todo, todo: todoMsg });
        setIsTodoEditable(false);
    }

    const toggleCompleted = () => {
        toggleComplete(todo.id)

    }

    return (
        <div className="w-1/2 my-2">
            <div className={`w-4/5 mx-auto px-4 p-2 rounded flex items-center  justify-between ${todo.completed ? "bg-green-200" : "bg-purple-300"}`}>

                <div>
                    <input
                        type="checkbox"
                        className='cursor-pointer'
                        checked={todo.completed}
                        onChange={toggleCompleted}
                        disabled={isTodoEditable} />

                    <input
                        type="text"
                        value={todoMsg}
                        className={`w-80 py-1 mx-4 bg-purple-300 rounded ${todo.completed ? "line-through bg-green-200" : ""} ${isTodoEditable ? "focus:outline-green-800" : "border-transparent focus:outline-none"}`}
                        readOnly={!isTodoEditable}
                        onChange={(e) => setTodoMsg(e.target.value)} />
                </div>

                <div
                    className="inline space-x-4">
                    <button
                        className={`bg-gray-100 p-2 inline rounded`}
                        onClick={() => {
                            if (todo.completed) {
                                return
                            } if (isTodoEditable) {
                                editTodo();
                            } else {
                                setIsTodoEditable(prev => !prev)
                            }
                        }} disabled={todo.completed}>
                        {isTodoEditable ? '📁' : '✏️'}
                    </button>
                    <button
                        className="bg-gray-100 p-2 inline rounded" onClick={() => deleteTodo(todo.id)}>
                        ❌
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Todos