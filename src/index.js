import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer/reducer'


const preload = {2018:{
        1:{
            1:'Holiday',
            15:'Busy',
            16:'Birthday',
            17:'Anniversary'
        },
        11:{
            21:'Birthday',
            20:'Busy',
            22:'Anniversary'
        }
    },2019:{
        1:{
            1:'Holiday'
        }
    }}
const store = createStore(reducer,
    preload,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
