import React from 'react';
import ReactDOM from 'react-dom';
import WebfontLoader from '@dr-kobros/react-webfont-loader';
import './index.css';
import App from './App';

const config = {
    google: {
        families: ['Montserrat:300,400,600,700'],
    }
};

ReactDOM.render(
    <React.StrictMode>
        <WebfontLoader config={config}>
            <App/>
        </WebfontLoader>
    </React.StrictMode>,
    document.getElementById('root')
);

