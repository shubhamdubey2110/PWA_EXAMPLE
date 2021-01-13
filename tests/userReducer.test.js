import reducer from '../redux/user/reducer'

describe('REDUCER', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({ parseUserLoaded: false,
      userLoaded: false,
      user: {},
      error: false,
      errorMessage: '' })
  })
  it('should handle "USER_REQUEST" action', () => {
    expect(reducer({}, { type: 'USER_REQUEST' })).
      toEqual({ parseUserLoaded: false, userLoaded: false })
  })
  it('should handle "USER_SUCCESS" action', () => {
    const mockData = 'coming from redux-saga'
    expect(reducer({}, { type: 'USER_SUCCESS', user: mockData }))
      .toEqual({ user: mockData, parseUserLoaded: true, userLoaded: true , error: false })
  })
})
