import type { Observable } from 'rxjs'
import type { Action } from '@reduxjs/toolkit'
import { switchMap } from 'rxjs/operators'
import { from } from 'rxjs'
import { ofType, Epic } from 'redux-observable'
import { APP_ACTION_TYPES } from './actions'
import { RefDataAction } from './../reference-data/actions'

export const bootstrap: Epic<Action, Action> = (actions$) =>
  actions$.pipe(
    ofType(APP_ACTION_TYPES.BOOTSTRAP_APP),
    switchMap(() => {
      console.log('Boostrap App')
      return from([RefDataAction.refDataLoad()])
    })
  )

export default bootstrap
