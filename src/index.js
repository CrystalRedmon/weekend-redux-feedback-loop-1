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
        case "ADD_FEELINGS":
            return {feelings: action.payload};
        case "ADD_UNDERSTANDING":
            return {understanding: action.payload};
        case "ADD_SUPPORTED":
            return {support: action.payload};
        case "ADD_COMMENTS":
            return {comments: action.payload}
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
