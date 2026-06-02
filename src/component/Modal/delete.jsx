
import React from 'react'
import { useToDo } from '../../Context/TodoContext';

function DeleteModal({title, onClose, todo}) {

    const { deleteToDos } = useToDo();


    const handleDelete = () => {
        if (!todo) return;
        deleteToDos(todo.id);
        onClose();
    };


    return (
                <>
                    <div className='flex items-center gap-4 mb-4'>
                        {title}
                    </div>

                <h1 className='text-lg font-semibold mb-5'>
                    Are you sure you want to delete?
                </h1>

                <div className='flex justify-end gap-3'>

                    <button
                        onClick={()=>onClose()}
                        className='border px-4 py-2 rounded'
                    >
                        Cancel
                    </button>

                    <button
                        onClick={handleDelete}
                        className='bg-red-500 text-white px-4 py-2 rounded'
                    >
                        Delete
                    </button>

                </div>
                </>
                

     
    )
}

export default DeleteModal
