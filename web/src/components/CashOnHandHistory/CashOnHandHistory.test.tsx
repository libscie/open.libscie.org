import { render } from '@redwoodjs/testing/web'

import CashOnHandHistory from './CashOnHandHistory'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CashOnHandHistory', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CashOnHandHistory />)
    }).not.toThrow()
  })
})
