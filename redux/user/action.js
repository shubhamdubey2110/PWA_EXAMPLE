import { createActions, } from 'reduxsauce'

export const { Types, Creators, } = createActions({
  userRequest: ['firstCall', 'mode',],
  userSuccess: ['user',],
  userFailure: ['error',],
},)

export default Creators
