
import { shallow, } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'

import App from '../pages/demo.js'

describe('With Enzyme', () => {
  it('App shows Welcome to Next.js!"', () => {
    const wrapper = shallow(<App />,)
    const text = wrapper.find('p',).text()
    expect(text,).toEqual('Welcome',)
  },)
},)
