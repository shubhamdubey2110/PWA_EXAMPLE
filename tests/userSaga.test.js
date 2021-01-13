import { firstCall } from '../redux/user/saga'
import { shallow, } from 'enzyme'
import { put, takeLatest, all } from 'redux-saga/effects'

describe('SAGAS', () => {
  it('should dispatch action "USER_SUCCESS" with result from fisrtCall', () => {
    const mockResponse = {  'json': 'coming from redux-saga' } 
    const generator = firstCall()
    generator.next()
    expect(generator.next(mockResponse).value).toEqual(put({ type:'USER_SUCCESS',  'user': 'coming from redux-saga' }))
    expect(generator.next().done).toBeTruthy()
  })
})
