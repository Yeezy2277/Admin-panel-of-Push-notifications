import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import LoginPage from "./LoginPage";
import {Provider} from "react-redux";
import store from "./redux/store";

export const rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <LoginPage />
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
    reportWebVitals();

}