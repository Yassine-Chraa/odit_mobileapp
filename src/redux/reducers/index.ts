import {combineReducers} from '@reduxjs/toolkit';
import user from './user';
import settings from './settings';

export default combineReducers({user,settings});