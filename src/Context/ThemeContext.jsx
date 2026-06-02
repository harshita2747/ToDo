import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {

        const [darkMode,setDarkMode] = useState(null);

      const toggle =() =>{
         setDarkMode((prev)=>!prev)
      }
           
        

return (
    <ThemeContext.Provider value={{darkMode,toggle}}>
        {children}
    </ThemeContext.Provider>)
}

export const useTheme = () => useContext(ThemeContext);