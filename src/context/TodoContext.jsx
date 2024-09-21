import {  useContext , creatContext, createContext} from 'react'

export const TodoContext = createContext({
    //properties added in our todo
    todos:[
        {
            id: 1,
            todo : 'My first Todo',
            completed : false
        },
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
});

export const TodoProvider = TodoContext.Provider;

export const useTodo = () =>{
    return useContext(TodoContext);
}

