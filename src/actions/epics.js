import {
    API_CALL_STARTED,
    API_CALL_FINISHED,
    API_CALL_FAILED,
    API_CALL_RESET,
} from '../constants/epics';

export const apiCallStarted = (stateKey, request) => ({
    type: API_CALL_STARTED,
    stateKey,
    request,
});

export const apiCallFinished = (stateKey, response) => ({
    type: API_CALL_FINISHED,
    stateKey,
    response,
});

export const apiCallFailed = (stateKey, error) => ({
    type: API_CALL_FAILED,
    stateKey,
    error,
});

export const apiCallReset = (stateKey, error) => ({
    type: API_CALL_RESET,
    stateKey,
});
