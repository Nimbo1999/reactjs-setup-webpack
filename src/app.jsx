import React from 'react';
import Image from './assets/img/matheus-lopes.jpeg';
import { useTranslation } from 'react-i18next';

const App = () => {

    const { t } = useTranslation();

    return (
        <div className="app-wrapper">
            <h2>{ t('title') }</h2>
            <div className="app-content">
                <div className="image-content" style={ { backgroundImage: `url(${Image})` } } />
                <span>{ t('author') }</span>
            </div>
        </div>
    );
}

export default App;