import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/root-reducer';
import {composeWithDevTools} from 'redux-devtools-extension/logOnlyInProduction';
import rootEpic from '../epics/root-epics';
import {createEpicMiddleware} from 'redux-observable';
import localforage from 'localforage';
import {persistStore, persistReducer} from 'redux-persist';
import immutableTransform from 'redux-persist-transform-immutable';

const storage = localforage.createInstance({
    name: 'getUserApp',
});

const persistConfig = {
    key: 'getUserApp',
    transforms: [immutableTransform()],
    storage,
};

const epicMiddleware = createEpicMiddleware();

export default () => {
    const store = createStore(
        persistReducer(persistConfig, rootReducer),
        composeWithDevTools(
            applyMiddleware(epicMiddleware)
        )
    );

    epicMiddleware.run(rootEpic);

    store.__persistor = persistStore(store);

    return store;
};
