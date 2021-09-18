import React from 'react'
import { Toast } from './Toast'
import { render, screen } from '@/test/test-utils'
import { noop } from '@/utils/noop'

describe('Toast', () => {
  it('should render correctly', () => {
    render(<Toast status="default" description="hello" onClose={noop} />)
    expect(screen.getByText('hello')).toBeInTheDocument()
  })
})
