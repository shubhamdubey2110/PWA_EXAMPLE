import { useEffect, } from 'react'
import * as gtag from '../lib/gaTag'

const Demo = () => {
  let test = ''
  useEffect(() => {
    test = 'test data'
    gtag.event({
      action: 'submit_form',
      category: 'post',
      label: 'Test lable',
      value: 5
    })
  }, [])
  return (
    <div>
      <p>Welcome</p>
      <span>{test}</span>
    </div>
  )
}
export default Demo
