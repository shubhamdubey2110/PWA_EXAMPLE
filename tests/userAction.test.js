import actions from '../redux/user/action'

describe('ACTIONS', () => {
  it('should create an action with correct type', () => {
    const expectedAction = {
      type: 'USER_REQUEST'
    }
    expect(actions.userRequest()).toEqual(expectedAction)
  })
})