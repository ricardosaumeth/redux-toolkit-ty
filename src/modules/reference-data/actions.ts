import { createAction } from '@reduxjs/toolkit'

export enum REF_DATA_ACTION_TYPES {
  REF_DATA_LOAD = 'REF_DATA_LOAD',
  REF_DATA_LOAD_ACK = 'REF_DATA_LOAD_ACK',
  REF_DATA_LOAD_NACK = 'REF_DATA_LOAD_NACK',
}

export const RefDataAction = {
  refDataLoad: createAction(REF_DATA_ACTION_TYPES.REF_DATA_LOAD),
  refDataLoadAck: createAction(
    REF_DATA_ACTION_TYPES.REF_DATA_LOAD_ACK,
    function prepare(currencies: string[]) {
      return {
        payload: {
          currencies,
        },
      }
    }
  ),
  // refDataLoadNack: createAction<REF_DATA_ACTION_TYPES.REF_DATA_LOAD_NACK>(REF_DATA_ACTION_TYPES.REF_DATA_LOAD_NACK),
}

// export type RefDataActions = typeof RefDataAction;
// export type RefDataLoad = ReturnType<typeof RefDataAction.refDataLoad>;
// export type RefDataLoadAck = ReturnType<typeof RefDataAction.refDataLoadAck>;
//export type RefDataLoadNack = ReturnType<typeof RefDataAction.refDataLoadNack>;
