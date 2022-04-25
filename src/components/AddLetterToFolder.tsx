import React, { useState } from 'react';
import { useActions, useTypedSelector } from '../hooks/redux';
import { CustomFolder } from '../types/customFolders';
import FormButton from './UI/FormButton/FormButton';

const AddLetterToFolder: React.FC<{openedLetterId?: number, afterFunc?: () => void}> = ({openedLetterId, afterFunc}) => {
    const { selectedLetters } = useTypedSelector(store => store.letters);
    const { folders } = useTypedSelector(store => store.customFolders);
    const { clearSelectedLetters, addLetterToFolders } = useActions();

    const [select, setSelect] = useState(folders[0]?.name);

    return (

        <div className="add-letter-to-folder">
            {(!folders.length) 
                ?   <p className="add-letter-to-folder__error">У вас нет созданных папок</p>
                :   <>
                    <select 
                        value={select} 
                        onChange={(e) => setSelect(e.target.value)}
                        className="add-letter-to-folder__select"
                    >
                        {folders.map(folder => <option>{folder.name}</option>)}
                    </select>
                    <FormButton
                        clickHandler={() => {
                            const selectedFolder = folders.find(folder => folder.name === select) as CustomFolder; 
                            clearSelectedLetters();
                            addLetterToFolders((openedLetterId) ? [openedLetterId] : selectedLetters, selectedFolder.id);
                            if (afterFunc) afterFunc();
                        }}
                    >
                        Копировать
                    </FormButton>
                    </>}
            
        </div>
    );
}

export default AddLetterToFolder;