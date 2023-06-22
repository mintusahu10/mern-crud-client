import {applyMiddleware, combineReducers, createStore} from 'redux'
import { GetUserdataReducer } from './reducers/reducer'
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
const reducer = combineReducers({
    users:GetUserdataReducer
    
});

const middleware = [thunk];

const store = createStore(reducer,
    composeWithDevTools(applyMiddleware(...middleware)));

    export default store;