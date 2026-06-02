import ToDoForm from '../component/ToDoForm'
import TodoCard from '../component/TodoCard';
import { useTheme } from '../Context/ThemeContext';

export default function Home() {

    const { darkMode, toggle } = useTheme();

    return (
        <>
            <div className={`min-h-screen py-8 ${
                darkMode ? "bg-black text-white" : "bg-white text-black"
            }`}>

                <div className="flex items-center justify-between bg-[#172842] w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">

                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">
                        Manage Your Todos
                    </h1>

                    <button
                        onClick={toggle}
                        className="rounded-lg border-2 p-2 border-white"
                    >
                        {darkMode ? "Light Mode" : "Dark Mode"}
                    </button>

                </div>

                <div className='flex items-center justify-center m-5'>
                    <ToDoForm />
                </div>

                <div className="w-full max-w-2xl mx-auto mt-4">
                    <TodoCard />
                </div>

            </div>
        </>
    )
}