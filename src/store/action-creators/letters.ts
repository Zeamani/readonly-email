import { Letter } from './../../types/letters';
import { Dispatch } from "redux"
import { LettersAction, LettersActionTypes } from "../../types/letters"

export const clearSelectedLetters = () => {
    (document.querySelectorAll('.letters-item__checkbox-input')).forEach((checkbox) => (<HTMLInputElement>checkbox).checked = false);
    return {type: LettersActionTypes.CLEAR_SELECTED_LETTERS};
}

export const addSelectedLetters = (letterId: number) => {
    return {type: LettersActionTypes.ADD_SELECTED_LETTERS, payload: letterId};
}

export const removeSelectedLetters = (letterId: number) => {
    return {type: LettersActionTypes.REMOVE_SELECTED_LETTERS, payload: letterId};
}

export const openSearchResultLetters = () => {
    return {type: LettersActionTypes.OPEN_SEARCH_RESULT_LETTERS};
}

export const closeSearchResultLetters = () => {
    return {type: LettersActionTypes.CLOSE_SEARCH_RESULT_LETTERS};
}

export const openLetters = (letter: Letter) => {
    return {type: LettersActionTypes.OPEN_LETTERS, payload: letter};
}

export const closeLetters = () => {
    return {type: LettersActionTypes.CLOSE_LETTERS};
}

export const setTypeLetters = (type: string, id?: number) => {
    return {type: LettersActionTypes.SET_TYPE_LETTERS, payload: { type: type, idFolder: id }};
}

export const setSearchStrLetters = (searchStr: string) => {
    return async (dispatch: Dispatch<LettersAction>) => {
        if (searchStr) dispatch({type: LettersActionTypes.OPEN_SEARCH_RESULT_LETTERS})
        else dispatch({type: LettersActionTypes.CLOSE_SEARCH_RESULT_LETTERS});

        dispatch({type: LettersActionTypes.SET_SEARCH_STR_LETTERS, payload: searchStr});
    }
}

export const getLetters = () => {
    return async (dispatch: Dispatch<LettersAction>) => {
        try {
            dispatch({type: LettersActionTypes.GET_LETTERS});

            //GET LETTERS (different sources)
            const receivedLetters = [
                {
                    id: 1,
                    name: "Roxanne Gilmour",
                    date: "Jan 1",
                    emailAddress: "mail@mail.ru",
                    theme: "Lorem ipsum dolor sit amet",
                    textLetter: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    type: "incoming" 
                },
                {
                    id: 2,
                    name: "Deegan Stephensony",
                    date: "Jan 1",
                    emailAddress: "mail@mail.ru",
                    theme: "Lorem ipsum dolor sit amet",
                    textLetter: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    type: "outgoing" 
                },
                {
                    id: 3,
                    name: "Easton Carrillo",
                    date: "Jan 1",
                    emailAddress: "mail@mail.ru",
                    theme: "Lorem ipsum dolor sit amet",
                    textLetter: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    type: "trash" 
                },
                {
                    id: 4,
                    name: "Isabel Lamb",
                    date: "Jan 1",
                    emailAddress: "mail@mail.ru",
                    theme: "Lorem ipsum dolor sit amet",
                    textLetter: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    type: "draft" 
                },
                {
                    id: 5,
                    name: "Yandel West",
                    date: "Jan 1",
                    emailAddress: "mail@mail.ru",
                    theme: "Lorem ipsum dolor sit amet",
                    textLetter: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    type: "spam" 
                },
                {
                    id: 6,
                    name: "Sanai Leon",
                    date: "Jan 1",
                    emailAddress: "mail@mail.ru",
                    theme: "Lorem ipsum dolor sit amet",
                    textLetter: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    type: "trash" 
                },
                {
                    id: 7,
                    name: "Aliyah Strong",
                    date: "Jan 1",
                    emailAddress: "mail@mail.ru",
                    theme: "Lorem ipsum dolor sit amet",
                    textLetter: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    type: "incoming" 
                },
                {
                    id: 8,
                    name: "Monique Bautista",
                    date: "Jan 1",
                    emailAddress: "mail@mail.ru",
                    theme: "Lorem ipsum dolor sit amet",
                    textLetter: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    type: "outgoing" 
                },
                {
                    id: 9,
                    name: "Janiya Bright",
                    date: "Jan 1",
                    emailAddress: "mail@mail.ru",
                    theme: "Lorem ipsum dolor sit amet",
                    textLetter: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    type: "draft" 
                },
                {
                    id: 10,
                    name: "Shelby Mitchell",
                    date: "Jan 1",
                    emailAddress: "mail@mail.ru",
                    theme: "Lorem ipsum dolor sit amet",
                    textLetter: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    type: "spam" 
                },
                {
                    id: 11,
                    name: "Isaias Knapp",
                    date: "Jan 1",
                    emailAddress: "mail@mail.ru",
                    theme: "Lorem ipsum dolor sit amet",
                    textLetter: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    type: "outgoing" 
                },
                {
                    id: 12,
                    name: "Austin Ross",
                    date: "Jan 1",
                    emailAddress: "mail@mail.ru",
                    theme: "Lorem ipsum dolor sit amet",
                    textLetter: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    type: "trash" 
                },
                {
                    id: 13,
                    name: "Roxanne Gilmour",
                    date: "Jan 1",
                    emailAddress: "mail@mail.ru",
                    theme: "Lorem ipsum dolor sit amet",
                    textLetter: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    type: "incoming" 
                },
                {
                    id: 14,
                    name: "Milan Lindsey",
                    date: "Jan 1",
                    emailAddress: "mail@mail.ru",
                    theme: "Lorem ipsum dolor sit amet",
                    textLetter: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    type: "draft" 
                },
                {
                    id: 15,
                    name: "Jonah Gallegos",
                    date: "Jan 1",
                    emailAddress: "mail@mail.ru",
                    theme: "Lorem ipsum dolor sit amet",
                    textLetter: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    type: "spam" 
                }
            ];
            // -----

            dispatch({type: LettersActionTypes.GET_LETTERS_SUCCES, payload: receivedLetters});
        } catch (e: ReturnType<Error>) {
            dispatch({type: LettersActionTypes.GET_LETTERS_ERROR, payload: e.message});
        }
    }
}