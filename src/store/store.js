import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import author from './reducers/author.reducer.js';

const rootReducer = combineReducers({
  author
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
