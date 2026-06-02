import React, { useState } from 'react'
import { useToDo } from '../Context/TodoContext';
import { useTheme } from '../Context/ThemeContext';



function ToDoForm({ }) {
  const [todo, setTodo] = useState("");


  const { addToDos, setFilter, filter } = useToDo();
  const { darkMode } = useTheme();

  const handleSubmit = (e) => {
    e.preventDefault();
    addToDos(todo);


    setTodo("");



  };


  return (

    <>

      <div className={`flex item-center justify-between gap-2 ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}>
        <div className='flex gap-2'>
          <button onClick={() => setFilter('all')} className={`bg-amber-400 px-3 py-2 text-white rounded-lg ${filter === "all"
            ? "bg-blue-600"
            : "bg-amber-400"
            }`}>All</button>
          <button onClick={() => setFilter('completed')} className={`bg-amber-400 px-3 py-2 text-white rounded-lg ${filter === "completed"
            ? "bg-blue-600"
            : "bg-amber-400"
            }`}>Complete</button>
          <button onClick={() => setFilter('incompleted')} className={`bg-amber-400 px-3 py-2 text-white rounded-lg ${filter === "incompleted"
            ? "bg-blue-600"
            : "bg-amber-400"
            }`}>Incomplete</button>
        </div>

        <form onSubmit={handleSubmit} className="flex gap-3">

          <input
            type="text"
            placeholder="Enter Todo..."
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            className={`w-full px-3 py-2 rounded-lg outline-none border placeholder-gray-400 ${darkMode
                ? "bg-[#1e1e1e] text-white border-gray-500"
                : "bg-white text-black border-black"
              }`} />

          <div>
            <button
              type="submit"
              disabled={!todo}
              className="bg-green-500 px-4 py-2 rounded-lg disabled:bg-gray-400 "
            >
              Add
            </button>


          </div>

        </form>
      </div>
    </>
  )
}

export default ToDoForm
