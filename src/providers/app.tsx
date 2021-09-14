import { theme } from '@/theme'
import { Direction, getRtlDirection } from '@/utils/rtl'
import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import { ConfigContextState, ConfigProvider } from './config'
import { RtlProvider } from './rtl'

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
