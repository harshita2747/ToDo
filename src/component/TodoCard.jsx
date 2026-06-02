import React from 'react'
import { useToDo } from '../Context/TodoContext';
import { useModal } from '../Context/ModalContext';
import { useTheme } from '../Context/ThemeContext';

function TodoCard() {
    const { todos, status } = useToDo();

    const {openModal} = useModal();
    const {darkMode,toggle} = useTheme();
    return (
        <>

            <div>
                <div> {
                    todos.map((item) => (
                        <div
                            key={item.id}
                            className={`p-3 rounded-lg mb-2 flex justify-between ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}
                        >
                            <div className='flex items-center gap-3'>

                                <input 
                                    type="checkbox"
                                    checked={item.completed}
                                    onChange={() => status(item.id)}
                                />

                                <p
                                    className={
                                        item.completed
                                            ? "line-through text-gray-500"
                                            : ""
                                    }>{item.text}</p>
                            </div>

                            <div className='flex gap-2'>

                                <button onClick={() =>openModal('delete',{title : 'Delete Todo', todo: item})} className='bg-red-500 text-white px-3 py-1 rounded'>
                                    Delete
                                </button>

                                <button  onClick={() =>openModal('edit',{title : 'Edit Todo', todo: item})} className='bg-blue-500 text-white px-3 py-1 rounded'>
                                    Edit
                                </button>

                            </div>
                        </div>
                    ))
                }


                </div>




            </div>
        </>
    )
}

export default TodoCard
