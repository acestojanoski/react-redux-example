import {SET_USERNAME} from '../constants/action-types';

const setUsername = name => ({
    type: SET_USERNAME,
    name
});

export default setUsername;
