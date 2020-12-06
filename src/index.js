import React from 'react';
import ReactDom from 'react-dom';
import App from './app';

const element = document.querySelector('#root');

ReactDom.render(<App />, element);