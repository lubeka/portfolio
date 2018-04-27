import React from 'react';
import ReactDOM from 'react-dom';
require('../sass/style.scss');
require('../js/main.js');

import App from './components/App';

ReactDOM.render(
    <App />,
    document.getElementById('root')
);