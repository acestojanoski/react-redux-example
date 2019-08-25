import { mergeMap, catchError, map } from 'rxjs/operators';
import { API_CALL_STARTED } from '../constants/epics';
import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { apiCallFinished, apiCallFailed } from '../actions/epics';
import { ajax } from 'rxjs/ajax';
import { Observable } from 'rxjs';
import apiConfig from './api-config';

const apiConfigError = new Observable(observer => {
    observer.error({
        message: 'Api congig error.'
    })
    observer.complete();
});

const apiCall = (stateKey, request) => {
    if (!apiConfig[stateKey]) {
        return apiConfigError;
    }

    let url = apiConfig[stateKey].url;

    if (apiConfig[stateKey].buildUrl) {
        url = apiConfig[stateKey].buildUrl(request);
    }
    
    const method = apiConfig[stateKey].method;

    if (!url || !method) {
        return apiConfigError;
    }

    return ajax({
        url,
        method,
        crossDomain: true,
        body: request,
    })
};

const api = (action$, state$, call = apiCall) => action$.pipe(
    ofType(API_CALL_STARTED),
    mergeMap(action =>
        call(action.stateKey, action.request).pipe(
            map(response => apiCallFinished(action.stateKey, response)),
            catchError(error => of(apiCallFailed(action.stateKey, error)))
        )
    )
);

export default api;
