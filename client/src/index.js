import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducers } from './reducers';
import reducer, {initialState} from "./reducer";
import {StateProvider} from "./StateProvider";


const store = createStore(reducers,compose(applyMiddleware(thunk)));

ReactDOM.render(
	<Provider store={store}>
	<StateProvider initialState={initialState} reducer={reducer}>
    <App />
    </StateProvider>
    </Provider>,
  document.getElementById('root')
);

