import {reducer as authReducer} from '../slices/Auth'
import {combineReducers} from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
    auth:authReducer
})