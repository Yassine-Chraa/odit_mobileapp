import {combineReducers} from '@reduxjs/toolkit';
import tokens from './tokens';
import settings from './settings';
import projects from './projects';
import user from './user';
import tasks from './tasks';
import project from './project';

export default combineReducers({tokens, settings, projects,project,user,tasks});
