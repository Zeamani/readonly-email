import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ReactChild, useEffect } from 'react';

const Modal: React.FC<{children: ReactChild, modalState: boolean, closeModal: () => void, title: string}> = ({children, modalState, closeModal, title}) => {

    useEffect(() => {
        const modalCloseHandler = (e: MouseEvent) => {
            if ((e.target as Element).classList.contains("modal")) closeModal();
        }

        document.addEventListener("click", modalCloseHandler);

        return () => document.removeEventListener("click", modalCloseHandler);
    }, []);

    return (
    <>
        {
        modalState && 
            <div className="modal">
                <div className="modal__inner">
                    <div className="modal__header">
                        <h1 className="modal__title">{title}</h1>
                        <div className="modal__close-button" onClick={closeModal}><FontAwesomeIcon icon={faXmark} /></div>
                    </div>
                    <div className="modal__body">
                        {children}
                    </div>
                </div>
            </div>
        }
    </>
    );
} 

export default Modal;