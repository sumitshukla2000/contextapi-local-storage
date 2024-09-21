

const TodoInput = () =>{
    return(
        <div className="w-1/2">
            <h1 className="text-white text-4xl text-center py-4 font-semibold">Manage Your Todos</h1>
            <div className="flex justify-center items-center  w-[80%] mx-auto rounded overflow-hidden">
                <input type="text" placeholder="Enter Todos" className="w-full py-2 px-2" />
                <button className="py-2 text-white px-2 bg-blue-900 ">Add</button>
            </div>
        </div>
    )
}

export default TodoInput