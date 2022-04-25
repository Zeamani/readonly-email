import { combineReducers } from "redux";
import { customFoldersReducer } from "./customFoldersReducer";
import { lettersReducer } from "./lettersReducer";

export const rootReducer = combineReducers({
    letters: lettersReducer,
    customFolders: customFoldersReducer
});