import {combineReducers} from 'redux';
import UserReducer from './reducer-users';
import ActiveIssueReducer from './reducer-active-issue';

const index =() => {
const allReducers = combineReducers({
    users: UserReducer,
    //activeIssue : ActiveIssueReducer
});
}
/*
function users(state = [], {type, payload}) {
  switch (type) {
    case 'FETCH_ALL_TABLES':
      return [
        ...state,
        ...payload,
      ]
  }
}

  return state;
}
*/

export default index;