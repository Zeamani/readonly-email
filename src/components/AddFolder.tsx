import React, { useState } from 'react';
import { useActions } from '../hooks/redux';
import FormButton from './UI/FormButton/FormButton';

const AddFolder: React.FC = () => {
    const { addCustomFolders } = useActions();

    const [folderName, setFolderName] = useState(""); 

    return (
        <div className="add-folder">
            <input 
                className="add-folder__input" 
                value={folderName} 
                onChange={e => {
                    if (e.target.value.length > 10) return false; 
                    setFolderName(e.target.value);
                }} 
                placeholder="Название папки" 
            />
            <p className="add-folder__help">Название папки должно содержать от 1 до 10 символов</p>
            <FormButton disabled={folderName.length === 0} clickHandler={() => addCustomFolders(folderName)}>Добавить</FormButton>
        </div>
    );
}

export default AddFolder;