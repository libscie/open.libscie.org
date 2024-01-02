// Pass props to your component by passing an `args` object to your story
//
// ```tsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import SingleStatistic from './SingleStatistic'

const meta: Meta<typeof SingleStatistic> = {
  component: SingleStatistic,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof SingleStatistic>

export const Primary: Story = {}
