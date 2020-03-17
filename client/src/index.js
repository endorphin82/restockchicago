import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from "./store";
import {Provider} from "react-redux";
import ApolloClient from "apollo-boost";
import {ApolloProvider} from "react-apollo";
import {BASE_URL} from "./AC/ActionTypes";

const client = new ApolloClient({
    uri: BASE_URL,
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <Provider store={store}>
            <App/>
        </Provider>
    </ApolloProvider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
