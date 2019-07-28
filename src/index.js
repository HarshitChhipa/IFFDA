import React from 'react';
import {render} from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import registerServiceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import store from "./shared/store";
import Routes from "./shared/routes";
import './assets/App.css';
import './assets/cards.css';

window._app_container = document.getElementById('root');

//  wrapping entire layout in Provider so every component has access to the store.

render(
    <Provider store={store}>
        <BrowserRouter>
            <div className="fluidContainer">
                <Routes/>
            </div>
        </BrowserRouter>
    </Provider>,
    window._app_container
);
registerServiceWorker();
