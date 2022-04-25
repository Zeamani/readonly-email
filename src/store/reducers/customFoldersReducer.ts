import { CustomFoldersAction, CustomFoldersActionTypes, CustomFoldersState } from './../../types/customFolders';

const initialState: CustomFoldersState = {
    folders: [],
    load: false,
    error: null
}

export const customFoldersReducer = (state = initialState, actoin: CustomFoldersAction): CustomFoldersState => {
    switch (actoin.type) {

        case (CustomFoldersActionTypes.GET_CUSTOM_FOLDERS):
            return {...state, load: true};

        case (CustomFoldersActionTypes.GET_CUSTOM_FOLDERS_SUCCES):
            return {...state, load: false, folders: actoin.payload};

        case (CustomFoldersActionTypes.GET_CUSTOM_FOLDERS_ERROR):
            return {...state, load: false, error: actoin.payload};

        case (CustomFoldersActionTypes.ADD_LETTERS_TO_FOLDERS): {
            const changedFolderLettters = state.folders.find(folder => folder.id === actoin.payload.idFolder)?.letters.concat(actoin.payload.newLetters) as number[];
            const newFolders = [ ...state.folders ];
            
            newFolders[state.folders.findIndex(folder => folder.id === actoin.payload.idFolder) as number].letters = changedFolderLettters;

            localStorage.setItem('customFolders', JSON.stringify(newFolders));

            return {...state, folders: newFolders};
        }

        case (CustomFoldersActionTypes.REMOVE_LETTERS_FROM_FOLDERS): {
            const changedFolderLettters = state.folders.find(folder => folder.id === actoin.payload.idFolder)?.letters.filter(letter => !actoin.payload.letters.includes(letter)) as number[];
            const newFolders = [ ...state.folders ];
            
            newFolders[state.folders.findIndex(folder => folder.id === actoin.payload.idFolder) as number].letters = changedFolderLettters;

            localStorage.setItem('customFolders', JSON.stringify(newFolders));

            return {...state, folders: newFolders};
        };
        
        case (CustomFoldersActionTypes.ADD_CUSTOM_FOLDERS): {
            let newFolders = state.folders.concat({
                id: state.folders.length + 1,
                name: actoin.payload,
                letters: []
            });

            localStorage.setItem('customFolders', JSON.stringify(newFolders));

            return {...state, folders: newFolders};
        }

        case (CustomFoldersActionTypes.REMOVE_CUSTOM_FOLDERS): {
            let newFolders = state.folders.filter(folder => folder.id !== actoin.payload);

            localStorage.setItem('customFolders', JSON.stringify(newFolders));

            return {...state, folders: newFolders};
        }
        


        default:
            return state;
    }
}