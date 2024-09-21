import { useState } from 'react';

const Todos = () =>{

        const [iseChecked , setIsChecked] = useState(false);
        const [edit , setEdit] = useState(false)
        const editToggle = () =>{
            setEdit(prev => !prev);
        }       


    return(
        <div className="w-1/2 my-2">
            <div className="w-4/5 mx-auto bg-purple-300 px-4 p-2 rounded flex items-center  justify-between ">

            <div>
                <input type="checkbox" iseChecked={false} onChange={()=>setIsChecked(prev => !prev)} />
                <input type="text" value="Sumit" style={{textDecoration : iseChecked ? "line-through" : "none"}} className="w-80 py-1 mx-4 bg-purple-300 rounded"  />
            </div>
                 
                 <div className="inline space-x-4">
                <p className="bg-gray-100 p-2 inline rounded cursor-pointer" onClick={editToggle}>{edit ? '📁' : '✏️'}</p>
                 <p className="bg-gray-100 p-2 inline rounded cursor-pointer">❌</p>
                 </div>
            </div>
        </div>
    )
}

export default Todos