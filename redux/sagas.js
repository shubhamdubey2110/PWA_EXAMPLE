import { all, } from 'redux-saga/effects'

import user from './user/saga'

/**
 *  Combine all sagas
 * @returns {void}
 */
export default function* rootSaga() {
  yield all([user(),],)
}
