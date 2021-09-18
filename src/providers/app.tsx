import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { ConfigContextState, ConfigProvider } from './config'
import { RtlProvider } from './rtl'
import { theme } from '@/theme'
import { Direction, getRtlDirection } from '@/utils/rtl'

type AppProviderProps = {
  children: React.ReactNode
  config: ConfigContextState
}

export const AppProvider = ({ children, config }: AppProviderProps) => {
  const direction: Direction = getRtlDirection(config.languageCode)

  return (
    <ChakraProvider theme={{ ...theme, direction }}>
      <RtlProvider dir={direction}>
        <ConfigProvider value={config}>{children}</ConfigProvider>
      </RtlProvider>
    </ChakraProvider>
  )
}
