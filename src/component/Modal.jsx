import React from 'react'
import { useModal } from '../Context/ModalContext'
import DeleteModal from './Modal/delete'
import EditModal from './Modal/edit'

function Modal() {
        
    const {modal, closeModal} = useModal() 


    if(!modal) return null

    const MODAL_MAP = {
        delete : DeleteModal,
        edit : EditModal
    }

    const Component = MODAL_MAP[modal.type]

    return (
        <div className='fixed inset-0 bg-black/40 flex items-center justify-center'>

            <div className='bg-white p-5 rounded-xl w-[320px]'>
                    
                <Component {...modal.props} onClose={closeModal}  />

            </div>

        </div>
    )
}

export default Modal
