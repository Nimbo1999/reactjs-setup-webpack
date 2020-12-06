import React from 'react';
import ReactDom from 'react-dom';
import App from './app';
import './assets/scss/main';

const element = document.querySelector('#root');

ReactDom.render(<App />, element);