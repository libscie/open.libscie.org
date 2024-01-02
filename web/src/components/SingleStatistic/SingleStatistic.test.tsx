import { render } from '@redwoodjs/testing/web'

import SingleStatistic from './SingleStatistic'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SingleStatistic', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SingleStatistic title="Test" value="12345" />)
    }).not.toThrow()
  })
})
