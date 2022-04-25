import { LettersState, LettersAction, LettersActionTypes } from './../../types/letters';

const initialState: LettersState = {
    letters: [],
    currentTypeFolder: { type: "incoming" },
    openLetter: null,
    searchStr: "",
    openSearchResult: false,
    selectedLetters: [],
    loading: false,
    error: null
}

export const lettersReducer = (state = initialState, action: LettersAction): LettersState  => {
    switch (action.type) {
        case (LettersActionTypes.GET_LETTERS):
            return {...state, loading: true};

        case (LettersActionTypes.GET_LETTERS_SUCCES):
            return {...state, loading: false, letters: action.payload};

        case (LettersActionTypes.GET_LETTERS_ERROR):
            return {...state, loading: false, error: action.payload};

        case (LettersActionTypes.SET_TYPE_LETTERS):
            return {...state, currentTypeFolder: action.payload};

        case (LettersActionTypes.SET_SEARCH_STR_LETTERS):
            return {...state, searchStr: action.payload};

        case (LettersActionTypes.OPEN_LETTERS):
            return {...state, openLetter: action.payload};

        case (LettersActionTypes.CLOSE_LETTERS):
            return {...state, openLetter: null};

        case (LettersActionTypes.CLOSE_SEARCH_RESULT_LETTERS):
            return {...state, openSearchResult: false};

        case (LettersActionTypes.OPEN_SEARCH_RESULT_LETTERS):
            return {...state, openSearchResult: true};

        case (LettersActionTypes.ADD_SELECTED_LETTERS):
            return {...state, selectedLetters: state.selectedLetters.concat(action.payload)};

        case (LettersActionTypes.REMOVE_SELECTED_LETTERS):
            return {...state, selectedLetters: state.selectedLetters.filter(letterId => letterId !== action.payload)};

        case (LettersActionTypes.CLEAR_SELECTED_LETTERS):
            return {...state, selectedLetters: []};
            
        default:
            return state;
    }
} 