import { createReducer } from '@reduxjs/toolkit'
import { RefDataAction } from './actions'

interface RefDataState {
  currencies: string[]
}

const initialState: RefDataState = {
  currencies: [],
}

const referenceDataReducer = createReducer(initialState, (builder) => {
  builder.addCase(RefDataAction.refDataLoadAck, (state, action) => {
    return action.payload
  })
})

export default referenceDataReducer
