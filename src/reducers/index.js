import { combineReducers } from 'redux'
import auth from './auth'
import commentReducer from './commentReducer'
import { reducer as reduxFormReducer } from 'redux-form';

const rootReducer = combineReducers({
  auth,
  commentsHits:commentReducer,
  form: reduxFormReducer
});

export default rootReducer
