import React, { useEffect, useMemo, useState } from 'react';
import { useActions, useTypedSelector } from '../hooks/redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LettersListItem from './LettersListItem';
import { faMagnifyingGlass, faFolderPlus, faFolderMinus, faEject } from '@fortawesome/free-solid-svg-icons';
import { useModal } from '../hooks/useModal';
import AddLetterToFolder from './AddLetterToFolder';
import Modal from './Modal';
import LettersExtraMenu from './LettersExtraMenu';

const Letters: React.FC = () => {
    const { letters, currentTypeFolder, searchStr, openSearchResult, selectedLetters } = useTypedSelector(store => store.letters);
    const { folders } = useTypedSelector(store => store.customFolders);
    const { setSearchStrLetters, clearSelectedLetters, removeLetterFromFolders, closeSearchResultLetters } = useActions();

    const lettersFiltred = useMemo(() => {
      if (currentTypeFolder.type === "custom") {
        const customFolder = folders.find(letter => letter.id === currentTypeFolder.idFolder);
        return letters.filter(letter => customFolder?.letters.includes(letter.id));
      }

      return letters.filter(letter => letter.type === currentTypeFolder.type);
    }, [currentTypeFolder, folders, letters]);

    const [lettersControlRender, setLettersControlRender] = useState(!selectedLetters.length);

    useEffect(() => {
      const searchListCloseHandler = (e: MouseEvent) => {
          if (!((e.target as Element).closest(".letters__search"))) closeSearchResultLetters();
      }

      document.addEventListener("click", searchListCloseHandler);

      return () => document.removeEventListener("click", searchListCloseHandler);
    }, []);

    useEffect(() => {
      if (!!selectedLetters.length) setLettersControlRender(true);
    }, [selectedLetters]);

    const lettersControlAnimationEnd = () => {
      if(!selectedLetters.length) setLettersControlRender(false);
    };

    const [modal, openModal, closeModal] = useModal();

    return (
        <section className="letters">
          <Modal
            title="Копировать в папку"
            modalState={modal}
            closeModal={closeModal}
          >
            <AddLetterToFolder afterFunc={closeModal} />
          </Modal>

          <div className="letters__header">
            <div className="letters__search">
              <input className="letters__search-input" onChange={(e) => setSearchStrLetters(e.currentTarget.value)} value={searchStr} />
              <FontAwesomeIcon className="letters__search-icon" icon={faMagnifyingGlass} />
              {openSearchResult &&
              <div className="letters__search-result">
                <table className="letters__list">
                  <tbody>
                    {letters
                      .filter(letter => letter.name.toLowerCase().includes(searchStr.toLowerCase()))
                      .map( (letter, key) => <LettersListItem isSearchList={true} key={key} letterItem={letter} />)}
                  </tbody>
                </table>
              </div>
              }
            </div>
            <LettersExtraMenu></LettersExtraMenu>
          </div>
          <div className="letters__body">
            {lettersControlRender &&
              <div 
                className="letters__control letters-control"
                style={{ animation: `${(!!selectedLetters.length) ? "letters__control_appearance" : "letters__control_penetration"} 0.2s both` }}
                onAnimationEnd={lettersControlAnimationEnd}
              >
                <div className="letters-control__count">{`Выбрано: ${selectedLetters.length}`}</div>
                {(currentTypeFolder.type === "custom")
                  ? <div className="letters-control__remove-to-folder" onClick={() => {
                      removeLetterFromFolders(selectedLetters, currentTypeFolder.idFolder as number);
                      clearSelectedLetters();
                    }}>
                    <FontAwesomeIcon icon={faFolderMinus} />
                    </div>
                  : <div className="letters-control__add-to-folder" onClick={() => openModal()}><FontAwesomeIcon icon={faFolderPlus} /></div>
                }
                <div className="letters-control__clear" onClick={() => clearSelectedLetters()}><FontAwesomeIcon icon={faEject} /></div>
              </div>
            }
            <table className="letters__list">
              <tbody>
                {lettersFiltred.map( (letter, key) => <LettersListItem isSearchList={false} key={key} letterItem={letter} />)}
              </tbody>
            </table>
          </div>
        </section>
    );
}

export default Letters;