import {
  ADD_STERN_STORE,
  REMOVE_STERN_STORE,
  RESET_STORE_STATE,
  ADD_STERN_PARAMS
} from './action_types'

export const addSternParameters = (params) => ({
  type:ADD_STERN_PARAMS,
  params
})

export const addSternStore = (typeStore, data) => ({
  type: ADD_STERN_STORE,
  key: typeStore,
  data
})

export const removeSternStore = (typeStore) => ({
  type: REMOVE_STERN_STORE,
  key: typeStore
})

export const resetStoreState = () => ({
  type: RESET_STORE_STATE
})