import { theme } from '@/theme'
import { ChakraProvider, Theme } from '@chakra-ui/react'
import React from 'react'
import { Direction, RtlProvider } from './rtl'

type AppProviderProps = {
  children: React.ReactNode
  isRtl: boolean
}

export const AppProvider = ({ children, isRtl }: AppProviderProps) => {
  const direction: Direction = isRtl ? 'rtl' : 'ltr'

  return (
    <ChakraProvider theme={{ ...theme, direction }}>
      <RtlProvider isRtl={isRtl}>{children}</RtlProvider>
    </ChakraProvider>
  )
}
