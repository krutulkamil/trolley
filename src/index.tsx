// react
import React from 'react';
import ReactDOM from 'react-dom';
// redux
import {Provider} from "react-redux";
import store from "./redux/store";
// react-query
import {QueryClient, QueryClientProvider} from 'react-query';
import {ReactQueryDevtools} from "react-query/devtools";
// react-webfont-loader
import WebfontLoader from '@dr-kobros/react-webfont-loader';
// components
import App from './App';
// styles
import './index.css';

const config = {
    google: {
        families: ['Montserrat:300,400,600,700'],
    }
};

const client = new QueryClient();

ReactDOM.render(
    <React.StrictMode>
        <QueryClientProvider client={client}>
            <Provider store={store}>
                <WebfontLoader config={config}>
                    <App />
                </WebfontLoader>
                <ReactQueryDevtools/>
            </Provider>
        </QueryClientProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

