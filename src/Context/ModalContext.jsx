import { createContext,useState ,useContext} from "react";

export const ModalContext = createContext();


export const ModalProvider = ({children}) => {
    
    const [modal, setModal] = useState(null);

  
    const openModal = (type, props={}) => {
        console.log('open');
        
       setModal({type,props});
    };

    const closeModal = () => {
        console.log('close');
        setModal(null)
    }
    


    return (
        <ModalContext.Provider value={{modal,openModal,closeModal}}>
            {children}
        </ModalContext.Provider>
    )
}

export const useModal = () => useContext(ModalContext);