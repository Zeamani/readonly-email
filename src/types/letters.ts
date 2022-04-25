export enum LettersActionTypes {
    GET_LETTERS = 'GET_LETTERS',
    GET_LETTERS_SUCCES = 'GET_LETTERS_SUCCES',
    GET_LETTERS_ERROR = 'GET_LETTERS_ERROR',

    SET_TYPE_LETTERS = 'SET_TYPE_LETTERS',

    SET_SEARCH_STR_LETTERS = 'SET_SEARCH_STR_LETTERS',
    CLOSE_SEARCH_RESULT_LETTERS = 'CLOSE_SEARCH_RESULT_LETTERS',
    OPEN_SEARCH_RESULT_LETTERS = 'OPEN_SEARCH_RESULT_LETTERS',

    OPEN_LETTERS = 'OPEN_LETTERS',
    CLOSE_LETTERS = 'CLOSE_LETTERS',

    ADD_SELECTED_LETTERS = 'ADD_SELECTED_LETTERS',
    REMOVE_SELECTED_LETTERS = 'REMOVE_SELECTED_LETTERS',
    CLEAR_SELECTED_LETTERS = 'CLEAR_SELECTED_LETTERS' 
    
}

interface GetLettersAction {
    type: LettersActionTypes.GET_LETTERS
}

interface GetLettersSuccesAction {
    type: LettersActionTypes.GET_LETTERS_SUCCES,
    payload: Letter[]
}

interface GetLettersErrorAction {
    type: LettersActionTypes.GET_LETTERS_ERROR,
    payload: string
}

interface SetTypeLettersAction {
    type: LettersActionTypes.SET_TYPE_LETTERS,
    payload: {
        type: string,
        idFolder?: number
    }
}

interface SetSearchStrLettersAction {
    type: LettersActionTypes.SET_SEARCH_STR_LETTERS,
    payload: string
}

interface OpenLettersAction {
    type: LettersActionTypes.OPEN_LETTERS,
    payload: Letter
}

interface CloseLettersAction {
    type: LettersActionTypes.CLOSE_LETTERS
}

interface CloseSearchResultLettersAction {
    type: LettersActionTypes.CLOSE_SEARCH_RESULT_LETTERS
}

interface OpenSearchResultLettersAction {
    type: LettersActionTypes.OPEN_SEARCH_RESULT_LETTERS
}

interface AddSelectedLetters {
    type: LettersActionTypes.ADD_SELECTED_LETTERS,
    payload: number
}

interface RemoveSelectedLetters {
    type: LettersActionTypes.REMOVE_SELECTED_LETTERS,
    payload: number
}

interface ClearSelectedLetters {
    type: LettersActionTypes.CLEAR_SELECTED_LETTERS,
}

export type LettersAction = GetLettersAction
                            | GetLettersSuccesAction
                            | GetLettersErrorAction
                            | SetTypeLettersAction
                            | SetSearchStrLettersAction
                            | OpenLettersAction
                            | CloseLettersAction
                            | CloseSearchResultLettersAction
                            | OpenSearchResultLettersAction
                            | AddSelectedLetters
                            | RemoveSelectedLetters
                            | ClearSelectedLetters;

export interface Letter {
    id: number,
    name: string,
    date: string,
    emailAddress: string,
    theme: string,
    textLetter: string,
    type: string
}

export interface LettersState {
    letters: Letter[],
    searchStr: string,
    currentTypeFolder: {
        type: string,
        idFolder?: number
    },
    openLetter: null | Letter,
    openSearchResult: boolean,
    selectedLetters: number[],
    loading: boolean,
    error: null | string,
}
