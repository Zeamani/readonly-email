import { bindActionCreators, Dispatch } from 'redux';
import { useSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";
import { RootState } from "../store/store";
import { useDispatch } from 'react-redux';
import rootActionCreator from '../store/action-creators/rootActionCreator';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(rootActionCreator, dispatch);
}