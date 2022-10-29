import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const feedback = (state = {}, action) => {
    let {feelings, understanding, support, comments} = state;
    
    switch (action.type) {
        case "ADD_FEELING":
            return {
                ...state,
                feeling: action.payload
            };
        case "ADD_UNDERSTANDING":
            return {
                ...state,
                understanding: action.payload
            };
        case "ADD_SUPPORT":
            return {
                ...state,
                support: action.payload
            };
        case "ADD_COMMENTS":
            return {
                ...state,
                comments: action.payload
            }
        case "RESET_STATE":
            return {};
    }
    return state;
}



const storeInstance = createStore(
    combineReducers({

        feedback
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
