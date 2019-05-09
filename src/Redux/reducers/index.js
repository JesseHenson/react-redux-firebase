import { combineReducers } from 'redux';

import data from './dataReducers';
import authUser from './auth';

export default combineReducers({data, authUser})