import React, { Suspense } from 'react';
import ReactDom from 'react-dom';
import App from './app';
import './i18n/i18n';
import './assets/scss/main';

const element = document.querySelector('#root');

ReactDom.render(
    <React.StrictMode>
        <Suspense fallback={<div>Loading...</div>}>
            <App />
        </Suspense>
    </React.StrictMode>
, element);