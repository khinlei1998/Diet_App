import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import HealthReducer from './HealthReducer';

const rootReducer = combineReducers({
  form: formReducer,
  health: HealthReducer,
});

export default rootReducer;
