import React, { useEffect, useState } from 'react';
import Letters from './components/Letters';
import Folders from './components/Folders';
import AddFolder from './components/AddFolder';
import OpenLetter from './components/OpenLetter';
import { useActions, useTypedSelector } from './hooks/redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useModal } from './hooks/useModal'


const App: React.FC = () => {
  const { currentTypeFolder, openLetter } = useTypedSelector(store => store.letters);
  const { getLetters, getCustomFolders, closeSearchResultLetters } = useActions();

  useEffect(() => {
    getLetters();
    getCustomFolders();
  }, []);

  return (
    <div className="App" >
      <main className="App__main main">
        <Folders />
        <Letters />
        <OpenLetter />
      </main>
    </div>
  );
}

export default App;
