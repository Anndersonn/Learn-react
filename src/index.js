import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/store';


let renderEntireTree = () => { 
    ReactDOM.render(<App state={store.getState()} dispatch={store.dispatch.bind(store)} />, document.getElementById('root'));
}

renderEntireTree(store.getState());

store.subscribe(renderEntireTree);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
