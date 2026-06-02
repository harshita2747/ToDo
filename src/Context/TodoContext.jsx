import React, { createContext, useContext, useState, useEffect ,useCallback, useMemo} from 'react'

export const TodoContext = createContext();




export const TodoProvider = ({ children }) => {

    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem("todos");

        return savedTodos ? JSON.parse(savedTodos) : [];
    });


    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);


    const [filter, setFilter] = useState("all");

    const filterTodo = useMemo(() => {
       return todos.filter((todo) => {

            if (filter === "completed") {
                return todo.completed
            };

            if (filter === "incompleted") {
                return !todo.completed
            };
            return true;
        })
    },[todos, filter])

    const addToDos =useCallback ((text) => {
        const newTodo = {
            id: Date.now(),
            text: text,
            completed: false,
        };

        setTodos((prev) => [...prev, newTodo]);
    },[])


    const deleteToDos = useCallback((id) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));

    },[])

    const editToDos = useCallback((id, updateText) => {
        setTodos((prev) => prev.map((todo) => todo.id === id ? { ...todo, text: updateText } : todo))
    },[])

    const status = useCallback((id) => {
        setTodos((prev) => prev.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo))

    },[])

    return (

        <TodoContext.Provider value={{ todos: filterTodo, addToDos, deleteToDos, editToDos, status, filterTodo,setFilter,filter }}>
            {children}
        </TodoContext.Provider>
    )
}


export const useToDo = () => useContext(TodoContext); 