import initialState from './initial-state';
import setUsername from './set-username';
import * as epics from './epics';

const handlers = {
    API_CALL_STARTED: epics.apiCallStarted,
    API_CALL_FINISHED: epics.apiCallFinished,
    API_CALL_FAILED: epics.apiCallFailed,
    API_CALL_RESET: epics.apiCallReset,
    SET_USERNAME: setUsername,
};

const app = (state = initialState, action) => {
    if (Object.prototype.hasOwnProperty.call(handlers, action.type)) {
        return handlers[action.type](state, action);
    }
    return state;
};

export default app;
