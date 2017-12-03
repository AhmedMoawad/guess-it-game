import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const RANDOM_MOVIES = [
    'Forrest Gump',
    'The God Father',
    'Shawshank Redemption',
    'The Prestige'
];

const chosenMovie = RANDOM_MOVIES[parseInt(Math.random() * RANDOM_MOVIES.length)];
ReactDOM.render(<App sentence={chosenMovie}/>, document.getElementById('root'));
registerServiceWorker();
