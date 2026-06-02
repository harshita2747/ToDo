import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { TodoProvider } from "./Context/TodoContext.jsx";
import {ModalProvider} from "./Context/ModalContext.jsx";
import Modal from "./component/Modal.jsx";
import { ThemeProvider } from "./Context/ThemeContext.jsx";

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <TodoProvider>
        <ModalProvider>
          <ThemeProvider>
            <App />
          </ThemeProvider>
          <Modal/>
        </ModalProvider>
      </TodoProvider>
  </BrowserRouter>
  )
