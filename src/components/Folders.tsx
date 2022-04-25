import { faArrowRight, faArrowLeft, faReceipt, faTrashCan, faThumbsDown, faPlus, faFolderClosed, faMinus, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useActions, useTypedSelector } from '../hooks/redux';
import { useModal } from '../hooks/useModal';
import AddFolder from './AddFolder';
import Logo from './Logo';
import Modal from './Modal';

const Folders: React.FC = () => {
    const { currentTypeFolder } = useTypedSelector(store => store.letters);
    const { folders } = useTypedSelector(store => store.customFolders);
    const { setTypeLetters, removeCustomFolders, clearSelectedLetters } = useActions();

    const [modal, openModal, closeModal] = useModal();

    const toggleFolder = (type: string, id?: number) => {
      setTypeLetters(type, id);
      clearSelectedLetters();
    }

    return (
        <section className="folders">

        <Modal 
          title="Добавить папку" 
          modalState={modal} 
          closeModal={closeModal}
        >
          <AddFolder />
        </Modal>

          <div className="folders__header">
            <Logo />
          </div>
          <div className="folders__body">
            <div className="folders__list">
              <div className={(currentTypeFolder.type === "incoming") ? "folders__item active" : "folders__item"} onClick={() => toggleFolder("incoming")}>
                <FontAwesomeIcon icon={faArrowRight} /><span>Входящие</span>
              </div>
              <div className={(currentTypeFolder.type === "outgoing") ? "folders__item active" : "folders__item"} onClick={() => toggleFolder("outgoing")}>
                <FontAwesomeIcon icon={faArrowLeft} /><span>Исходяшие</span>
              </div>
              <div className={(currentTypeFolder.type === "draft") ? "folders__item active" : "folders__item"} onClick={() => toggleFolder("draft")}>
                <FontAwesomeIcon icon={faReceipt} /><span>Черновик</span>
              </div>
              <div className={(currentTypeFolder.type === "trash") ? "folders__item active" : "folders__item"} onClick={() => toggleFolder("trash")}>
                <FontAwesomeIcon icon={faTrashCan} /><span>Корзина</span>
              </div>
              <div className={(currentTypeFolder.type === "spam") ? "folders__item active" : "folders__item"} onClick={() => toggleFolder("spam")}>
                <FontAwesomeIcon icon={faThumbsDown} /><span>Спам</span>
              </div>
              {folders.map(folder => {
                return (
                  <div 
                    className={(currentTypeFolder.idFolder === folder.id) ? "folders__item folders__item_custom active" : "folders__item folders__item_custom"} 
                    onClick={() => toggleFolder("custom", folder.id)}
                  >
                      {(currentTypeFolder.idFolder === folder.id) ? <FontAwesomeIcon icon={faFolderOpen} /> : <FontAwesomeIcon icon={faFolderClosed} />}<span>{folder.name}</span>
                    <FontAwesomeIcon 
                      className="folders__remove-button" 
                      onClick={(e) => {
                        removeCustomFolders(folder.id);
                        toggleFolder("incoming");
                        e.stopPropagation();
                      }} 
                      icon={faMinus} 
                    />
                  </div>
                ); 
              })}
            </div>
            <div className="folders-list__add-button" onClick={() => openModal()}>
              <FontAwesomeIcon icon={faPlus}/><span>Добавить папку</span>
            </div>
          </div>
        </section>
    );
}

export default Folders;