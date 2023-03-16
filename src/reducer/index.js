import { combineReducers } from 'redux'
import { issueSlice } from './loading'

export const rootReducer = combineReducers({ issue: issueSlice.reducer })
