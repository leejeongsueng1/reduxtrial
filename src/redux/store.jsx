import {createStore} from "redux";
import { Reducer } from './reducer/reducer'


export let store = createStore(Reducer);
