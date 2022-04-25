import * as LettersActionCreators from './letters'
import * as CustomFoldersCreators from './customFolders'


export default {
    ...LettersActionCreators,
    ...CustomFoldersCreators
}