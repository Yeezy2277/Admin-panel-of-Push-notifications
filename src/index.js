import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import LoginPage from "./LoginPage";
import {Provider} from "react-redux";
import store from "./redux/store";
import {BrowserRouter} from "react-router-dom";

    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
            <Provider store={store}>
                <LoginPage />
            </Provider>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );

    reportWebVitals();