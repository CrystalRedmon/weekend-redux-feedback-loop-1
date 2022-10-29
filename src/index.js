import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const feedback = (state = {}, action) => {
    let {feelings, understanding, support, comments} = state;
    
    switch (action.type) {
        case "ADD_FEELINGS":
            return {feelings: state.action.payload};

    }
    return state;
}



const storeInstance = createStore(
    combineReducers({

        feedback
    }),

)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
