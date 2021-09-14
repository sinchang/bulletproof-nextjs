import { CacheProvider } from '@emotion/react'
import createCache, { Options, StylisPlugin } from '@emotion/cache'
import rtl from 'stylis-plugin-rtl'
import { Direction } from '@/utils/rtl'

const options: { [k in Direction]: Options } = {
  rtl: { key: 'css-rtl', stylisPlugins: [rtl as StylisPlugin] },
  ltr: { key: 'css-ltr' },
}

type RtlProviderProps = {
  children: React.ReactNode
  dir: Direction
}

export function RtlProvider({ children, dir }: RtlProviderProps) {
  const cache = createCache(options[dir])
  return <CacheProvider value={cache}>{children}</CacheProvider>
}
