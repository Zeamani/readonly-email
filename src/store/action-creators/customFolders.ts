import { CustomFolder, CustomFoldersAction, CustomFoldersActionTypes } from './../../types/customFolders';
import { RootState } from './../store';
import { Dispatch } from 'redux';

export const addLetterToFolders = (letters: number[], id: number) => {
    return {type: CustomFoldersActionTypes.ADD_LETTERS_TO_FOLDERS, payload: {
        newLetters: letters, 
        idFolder: id
    }};
} 

export const removeLetterFromFolders = (letters: number[], id: number) => {
    return {type: CustomFoldersActionTypes.REMOVE_LETTERS_FROM_FOLDERS, payload: {
        letters: letters, 
        idFolder: id
    }};
} 

export const addCustomFolders = (nameFolder: string) => {
    return {type: CustomFoldersActionTypes.ADD_CUSTOM_FOLDERS, payload: nameFolder};
}

export const removeCustomFolders = (idFolder: number) => {
    return {type: CustomFoldersActionTypes.REMOVE_CUSTOM_FOLDERS, payload: idFolder};
}

export const getCustomFolders = () => {
    return async (dispatch: Dispatch<CustomFoldersAction>) => {
        try {
            dispatch({type: CustomFoldersActionTypes.GET_CUSTOM_FOLDERS});

            const customFolders = JSON.parse(<string>localStorage.getItem('customFolders'));

            dispatch({type: CustomFoldersActionTypes.GET_CUSTOM_FOLDERS_SUCCES, payload: (customFolders) ? customFolders : []});

        } catch (e: ReturnType<Error>) {
            dispatch({type: CustomFoldersActionTypes.GET_CUSTOM_FOLDERS_ERROR, payload: e.message});
        }
    }
}