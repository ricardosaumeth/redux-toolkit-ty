import { combineReducers } from '@reduxjs/toolkit'
import { combineEpics } from 'redux-observable'

// action

// add epics
import appEpics from './app/epics'
import refDataEpics from './reference-data/epics'
import transportEpics from '../core/transport/epics'

// add reducers
import refDataReducer from './reference-data/reducer'
import { AppActions } from './app/actions'
//import { RefDataActions } from './reference-data/actions';

export const rootEpic = combineEpics(appEpics, refDataEpics, transportEpics)

export const rootReducer = combineReducers({
  refData: refDataReducer,
})

//export type Actions = AppActions | RefDataActions;

export type RootState1 = ReturnType<typeof rootReducer>
