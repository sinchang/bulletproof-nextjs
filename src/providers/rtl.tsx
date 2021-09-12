import { CacheProvider } from '@emotion/react'
import createCache, { Options, StylisPlugin } from '@emotion/cache'
import rtl from 'stylis-plugin-rtl'

export type Direction = 'rtl' | 'ltr'

const options: { [k in Direction]: Options } = {
  rtl: { key: 'css-rtl', stylisPlugins: [rtl as StylisPlugin] },
  ltr: { key: 'css-ltr' },
}

type RtlProviderProps = {
  children: React.ReactNode
  isRtl: boolean
}

export function RtlProvider({ children, isRtl }: RtlProviderProps) {
  const dir: Direction = isRtl ? 'rtl' : 'ltr'
  const cache = createCache(options[dir])
  return <CacheProvider value={cache}>{children}</CacheProvider>
}
