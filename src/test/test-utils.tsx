import React, { FC, ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { AppProvider } from '@/providers/app'

const AllTheProviders: FC = ({ children }) => {
  return (
    <AppProvider
      config={{
        languageCode: 'en',
      }}
    >
      {children}
    </AppProvider>
  )
}

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }
