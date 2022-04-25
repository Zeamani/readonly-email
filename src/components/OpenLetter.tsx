import React, { useEffect, useState } from 'react';
import { useActions, useTypedSelector } from '../hooks/redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderPlus, faXmark } from '@fortawesome/free-solid-svg-icons';
import AddLetterToFolder from './AddLetterToFolder';
import Modal from './Modal';
import { useModal } from '../hooks/useModal';

const OpenLetter: React.FC = () => {
    const { openLetter } = useTypedSelector(store => store.letters);
    const { closeLetters } = useActions();

    const [modal, openModal, closeModal] = useModal();

    const [openLetterRender, setOpenLetterRender] = useState(!!openLetter);

    useEffect(() => {
        if (openLetter) setOpenLetterRender(true);
    }, [openLetter]);

    const openLetterAnimationEnd = () => {
        if(!openLetter) setOpenLetterRender(false);
    };

    return (
        <>
        {openLetterRender &&
            <section 
                className="open-letter"
                style={{ animation: `${openLetter ? "open-letter_appearance" : "open-letter_penetration"} 0.45s both` }}
                onAnimationEnd={openLetterAnimationEnd}
            > 
                <Modal
                    title="Копировать в папку"
                    modalState={modal}
                    closeModal={closeModal}
                >
                    <AddLetterToFolder openedLetterId={openLetter?.id} />
                </Modal>

                <div className="open-letter__header">
                    <div className="open-letter__add-to-folder" onClick={openModal}> <FontAwesomeIcon icon={faFolderPlus} /></div>
                    <div className="open-letter__close-control" onClick={closeLetters}><FontAwesomeIcon icon={faXmark} /></div>
                </div>
                <div className="open-letter__body">
                    <h1 className="open-letter__title">{openLetter?.theme}</h1>
                    <p className="open-letter__text">{openLetter?.textLetter}</p>
                    <div className="open-letter__letter-info">
                        <span className="open-letter__name">{openLetter?.name}</span>
                        <span className="open-letter__date">{openLetter?.date}</span>
                    </div>
                </div>
            </section>}
        </>
    );
}

export default OpenLetter;