import {fromJS} from 'immutable';

export const apiCallStarted = (state, action) => {
    state = state.set(action.stateKey, fromJS({}));
    
    if (action.request) {
        state = state.setIn([action.stateKey, 'request'], fromJS({...action.request}));
    }

    return state
        .setIn([action.stateKey, 'isLoading'], true)
        .setIn([action.stateKey, 'isLoaded'], false)
        .setIn([action.stateKey, 'isError'], false);
};

export const apiCallFinished = (state, action) => {
    return state
        .set(action.stateKey, fromJS({...action.response}))
        .setIn([action.stateKey, 'isLoading'], false)
        .setIn([action.stateKey, 'isLoaded'], true)
        .setIn([action.stateKey, 'isError'], false);
};

export const apiCallFailed = (state, action) => {
    return state
        .set(action.stateKey, fromJS({...action.error}))
        .setIn([action.stateKey, 'isLoading'], false)
        .setIn([action.stateKey, 'isLoaded'], false)
        .setIn([action.stateKey, 'isError'], true);
};

export const apiCallReset = (state, action) => {
    return state.set(action.stateKey, fromJS({}));
}
