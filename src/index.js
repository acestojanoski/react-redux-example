import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import { createBrowserHistory } from 'history';
import { PersistGate } from 'redux-persist/es/integration/react'
import ContentLoader from 'react-content-loader';
import { Container, Row, Col } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();

const loading = (
    <Container>
        <Row>
            <Col className="mx-auto text-center mt-5">
                <ContentLoader>
                    <rect x="50" y="17" rx="4" ry="4" width="300" height="10" />
                    <rect x="50" y="40" rx="4" ry="4" width="300" height="10" />
                    <rect x="50" y="63" rx="4" ry="4" width="300" height="10" />
                </ContentLoader>
            </Col>
        </Row>
    </Container>
);

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={loading} persistor={store.__persistor}>
            <BrowserRouter history={createBrowserHistory}>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
