import { combineReducers } from 'redux';
import repos from './reducer';

const rootReducer = combineReducers({
  repos,
});

export default rootReducer;
