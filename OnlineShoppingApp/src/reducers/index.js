import {combineReducers} from 'redux';
import UserReducer from './reducer-users'

const index =() => {
const allReducers = combineReducers({
    users: UserReducer
});
}

export default index;