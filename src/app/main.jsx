import React from 'react';
import ReactDOM from 'react-dom/client';
import { Router } from '@/pages';
import { Provider } from 'react-redux';
import store from './store';
import './main.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <Router />
        </Provider>
    </React.StrictMode>,
);
