import {createStore} from 'redux';
import attendanceReducer from '../reducers/rootReducer';

export default function configureStore(){
    return createStore(attendanceReducer);
}