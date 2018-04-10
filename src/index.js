import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App/App';
import {Provider} from "react-redux";
import store from "./state/index";


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
