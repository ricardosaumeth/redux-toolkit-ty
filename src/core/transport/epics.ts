import { Action } from '@reduxjs/toolkit'
import { REF_DATA_ACTION_TYPES } from './../../modules/reference-data/actions'
// import { Actions, RootState } from 'modules/root';
import { Dependencies, RootState } from '../../modules/redux/store'
import { Epic, ofType } from 'redux-observable'
import { filter, switchMap } from 'rxjs/operators'
import { EMPTY, from } from 'rxjs'

const connectToData: Epic<Action, never, void, Dependencies> = (
  action$,
  state$,
  { connection }
) =>
  action$.pipe(
    ofType(REF_DATA_ACTION_TYPES.REF_DATA_LOAD_ACK),
    switchMap(() => {
      connection.connect()

      return action$.pipe(
        //ofType(WS_ACTION_TYPES.WS_CONNECTION_STATUS_CHANGED),
        //filter(action => (action as WsConnectionStatusChanged).payload === ConnectionStatus.Connected),
        switchMap(() => EMPTY)
      )
    })
  )

export default connectToData
