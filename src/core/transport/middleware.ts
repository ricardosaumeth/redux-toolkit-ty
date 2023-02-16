import { Action } from '@reduxjs/toolkit'
import { Dispatch, Middleware } from 'redux'
import { Connection } from './Connection'
import { fromStringToArray } from './utils'

const createWsMiddleware =
  ({ connection }: { connection: Connection }): Middleware =>
  (store) =>
  (next: Dispatch) =>
  (action: Action) => {
    connection.onReceive((data) => {
      const parsedData = fromStringToArray(JSON.parse(data))
      let meta = undefined
      console.log(parsedData)
      //next(WsAction.wsMessage(parsedData, meta));
    })
    return next(action)
  }

export default createWsMiddleware
