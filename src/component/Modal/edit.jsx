
import React, { useEffect, useState } from 'react'
import { useToDo } from '../../Context/TodoContext';
function EditModal({title, onClose, todo}) {



    const { editToDos } = useToDo();

    const [text, setText] = useState("");



    useEffect(() => {
        if (todo) {
            setText(todo.text);
        }
    }, [todo]);




    const handleEdit = () => {
        if (!todo) return;

        editToDos(todo.id, text);
        onClose();
    };



    return (

                <>
                     <div className='flex items-center gap-4 mb-4'>
                    {title}
                </div>

                <h1 className='text-xl font-semibold mb-4'>
                    Edit Todo
                </h1>

                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className='border w-full p-2 rounded mb-4 outline-none'
                />

                <div className='flex justify-end gap-3'>

                    <button
                     onClick={()=>onClose()}
                        className='border px-4 py-2 rounded'
                    >
                        Cancel
                    </button>

                    <button
                        onClick={handleEdit}
                        className='bg-blue-500 text-white px-4 py-2 rounded'
                    >
                        Save
                    </button>

                </div>
                </>
        
                

            
    )
}

export default EditModal
