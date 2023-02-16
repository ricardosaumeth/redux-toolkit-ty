import { compose, configureStore } from '@reduxjs/toolkit'
import { createEpicMiddleware } from 'redux-observable'
import { Connection } from '../../core/transport/Connection'
import createWsMiddleware from '../../core/transport/middleware'
import { WsConnectionProxy } from '../../core/transport/WsConnectionProxy'
import { rootEpic, rootReducer } from '../root'

const connectionProxy = new WsConnectionProxy(`ws://45.91.170.150:8000`)

const connection = new Connection(connectionProxy)

const dependencies = {
  connection,
}

export type Dependencies = typeof dependencies

const epicMiddleware = createEpicMiddleware({ dependencies })

const wsMiddleware = createWsMiddleware({ connection })

export const store = configureStore({
  reducer: {
    rootReducer,
  },
  middleware: [epicMiddleware, wsMiddleware],
})

connection.onConenct(() => {
  //store.dispatch(WsAction.wsConnectionStatusChanged(ConnectionStatus.Connected));
  console.log('Connected')
})

epicMiddleware.run(rootEpic)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
