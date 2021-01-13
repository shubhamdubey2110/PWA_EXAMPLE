import { createReducer, } from 'reduxsauce'

import { Types, } from './action'

export const INITIAL_STATE = {
  parseUserLoaded: false,
  userLoaded: false,
  user: {},
  error: false,
  errorMessage: '',
}

// ------

export const userRequest = (state = INITIAL_STATE, action,) => ({
  ...state,
  parseUserLoaded: false,
  userLoaded: false,
})

export const userSuccess = (state = INITIAL_STATE, action,) => ({
  ...state,
  parseUserLoaded: true,
  userLoaded: true,
  user: action.user,
  error: false,
})

export const userFailure = (state = INITIAL_STATE, action,) => ({
  ...state,
  parseUserLoaded: false,
  userLoaded: false,
  user: {},
  error: true,
  errorMessage: action.error,
})

// ------

export const HANDLERS = {
  [Types.USER_REQUEST]: userRequest,
  [Types.USER_SUCCESS]: userSuccess,
  [Types.USER_FAILURE]: userFailure,
}

export default createReducer(INITIAL_STATE, HANDLERS,)
