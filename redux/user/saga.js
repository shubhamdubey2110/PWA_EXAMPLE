
import { takeLatest, put, call, select } from 'redux-saga/effects'

import ActionCreators, { Types, } from './action'
import { apiRequest } from '../../apiConfig/baseRequest'

/**
 *  Redux saga worker function
 * @param {string} action Pass string param during action call.
 * @returns {void}
 */
export function* firstCall(action,) {
  try {
    const userObj = 'coming from redux-saga'
    let data = yield call(apiRequest, {
      endpoint: 'todos/1',
      method: 'GET',
    })
    yield put(ActionCreators.userSuccess(userObj,),)
  } catch (err) {
    yield put(
      ActionCreators.userFailure('Error ', err,),
    )
  }
}

/**
 *  Watcher function
 * @returns {void}
 */
export default function* userWatcher() {
  yield takeLatest(Types.USER_REQUEST, firstCall,)
}
