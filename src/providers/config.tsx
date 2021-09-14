import { Context, createContext, useContext } from 'react'

export interface ConfigContextState {
  languageCode: string
}

const ConfigContext = createContext<ConfigContextState>({
  languageCode: 'en',
})

export const useConfig = (): ConfigContextState => {
  const contextState = useContext(ConfigContext)
  if (contextState === null) {
    throw new Error('useConfig must be used within a ConfigProvider tag')
  }
  return contextState
}

type ConfigProviderProps = {
  children: React.ReactNode
  value: ConfigContextState
}

export const ConfigProvider = ({ value, children }: ConfigProviderProps) => (
  <ConfigContext.Provider value={value}>{children}</ConfigContext.Provider>
)
