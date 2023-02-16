import { createAction } from '@reduxjs/toolkit'

export enum APP_ACTION_TYPES {
  BOOTSTRAP_APP = 'BOOTSTRAP_APP',
}

export const AppAction = {
  bootstrapApp: createAction<APP_ACTION_TYPES.BOOTSTRAP_APP | undefined>(
    APP_ACTION_TYPES.BOOTSTRAP_APP
  ),
}

export type AppActions = typeof AppAction
// export type BootstrapApp = ReturnType<typeof AppAction.bootstrapApp>;
