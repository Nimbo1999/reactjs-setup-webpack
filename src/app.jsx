import React from 'react';
import Image from './assets/img/matheus-lopes.jpeg';

const App = () => {
    return (
        <div className="app-wrapper">
            <h2>Wellcome to Webpack Reactjs Initialize!</h2>
            <div className="app-content">
                <div className="image-content" style={ { backgroundImage: `url(${Image})` } } />
                <span>Created by: Matheus Lopes</span>
            </div>
        </div>
    );
}

export default App;