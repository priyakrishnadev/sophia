import { combineReducers } from 'redux'
import auth from './auth'
import productComments from './productComments'
import categoryReducer from './categoryReducer'
import productReducer from './productReducer'
import { reducer as reduxFormReducer } from 'redux-form';

const rootReducer = combineReducers({
  auth,
  comments: productComments,
  category: categoryReducer,
  products: productReducer,
  form: reduxFormReducer
});

export default rootReducer
