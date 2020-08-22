import { createStore,applyMiddleware } from 'redux';
import thunk from 'react-thunk';
import rootReducer from './reducers';
export default createStore(rootReducer,applyMiddleware(thunk));