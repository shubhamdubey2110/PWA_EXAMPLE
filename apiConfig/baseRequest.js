/* eslint-disable complexity */
import { call, put, select } from 'redux-saga/effects'
import { BASE_URL } from './urls'
import { storeData } from '../redux/store'

export const apiRequest = ({ endpoint, method, body = null }) => {
  return new Promise(async function (resolve, reject) {
    const store = storeData.getState()
    // console.log(store, 'State data')
    const fetchOptions = {
      endpoint,
      method,
      headers: {
        Authorization: null,
        'Content-Type': 'application/json',
      },
    }
    if (body) {
      fetchOptions.body = JSON.stringify(body)
    }

    fetch(`${BASE_URL}${endpoint}`, fetchOptions)
      .then((res) => res.json())
      .then((response) => {
        return resolve(response)
      })
      .catch((err) => {
        return reject(err)
      })
  })
}
