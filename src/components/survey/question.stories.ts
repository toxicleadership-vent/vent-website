import type { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, expect } from '@storybook/test'

import { Question } from './question'

const meta = {
  title: 'Example/Question',
  component: Question,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Question>

export default meta
type Story = StoryObj<typeof meta>

export const QuestionComp: Story = {
  args: {
    question: 'Are you finding it difficult to mentally disconnect from work?',
    answers: ['Yes', 'No', 'Not sure'],
    index: 0,
  },
}
