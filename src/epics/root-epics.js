import api from './api';
import {combineEpics} from 'redux-observable';

export default combineEpics(api);
