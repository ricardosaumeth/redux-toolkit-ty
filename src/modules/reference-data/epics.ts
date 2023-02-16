import type { Action } from '@reduxjs/toolkit'
import { catchError, map, switchMap } from 'rxjs/operators'
import { ofType, Epic } from 'redux-observable'
import { RefDataAction, REF_DATA_ACTION_TYPES } from './actions'
import { fromFetch } from 'rxjs/fetch'
import { of } from 'rxjs'

export const loadRefData: Epic<Action, Action> = (actions$) =>
  actions$.pipe(
    ofType(REF_DATA_ACTION_TYPES.REF_DATA_LOAD),
    switchMap(() => {
      return fromFetch('/data/currencies.json').pipe(
        switchMap((result) => {
          return result.json()
        }),
        map((result) => {
          return RefDataAction.refDataLoadAck(result as string[])
        })
        //catchError(() => of(RefDataAction.refDataLoadNack()))
      )
    })
  )

export default loadRefData
