export enum CustomFoldersActionTypes {
    GET_CUSTOM_FOLDERS = 'GET_LETTERS',
    GET_CUSTOM_FOLDERS_SUCCES = 'GET_CUSTOM_FOLDERS_SUCCES',
    GET_CUSTOM_FOLDERS_ERROR = 'GET_CUSTOM_FOLDERS_ERROR',

    ADD_CUSTOM_FOLDERS = 'ADD_CUSTOM_FOLDERS',
    REMOVE_CUSTOM_FOLDERS = 'REMOVE_CUSTOM_FOLDERS',

    ADD_LETTERS_TO_FOLDERS = 'ADD_LETTERS_TO_FOLDERS',
    REMOVE_LETTERS_FROM_FOLDERS = 'REMOVE_LETTERS_FROM_FOLDERS'
}

interface GetCustomFoldersAction {
    type: CustomFoldersActionTypes.GET_CUSTOM_FOLDERS
}

interface GetCustomFoldersActionSucces {
    type: CustomFoldersActionTypes.GET_CUSTOM_FOLDERS_SUCCES,
    payload: CustomFolder[]
}

interface GetCustomFoldersActionError {
    type: CustomFoldersActionTypes.GET_CUSTOM_FOLDERS_ERROR,
    payload: string
}

interface AddCustomFolders {
    type: CustomFoldersActionTypes.ADD_CUSTOM_FOLDERS,
    payload: string
}

interface RemoveCustomFolders {
    type: CustomFoldersActionTypes.REMOVE_CUSTOM_FOLDERS,
    payload: number
}

interface AddLettersToFolders {
    type: CustomFoldersActionTypes.ADD_LETTERS_TO_FOLDERS,
    payload: {
        newLetters: number[],
        idFolder: number
    }
}

interface RemoveLettersFromFolders {
    type: CustomFoldersActionTypes.REMOVE_LETTERS_FROM_FOLDERS,
    payload: {
        letters: number[],
        idFolder: number
    }
}

export type CustomFoldersAction = GetCustomFoldersAction
                                | GetCustomFoldersActionSucces
                                | GetCustomFoldersActionError
                                | AddCustomFolders
                                | RemoveCustomFolders
                                | AddLettersToFolders
                                | RemoveLettersFromFolders;

export interface CustomFolder {
    id: number,
    name: string,
    letters: number[]
}

export interface CustomFoldersState {
    folders: CustomFolder[],
    load: boolean,
    error: null | string
}