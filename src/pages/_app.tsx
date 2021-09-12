import { AppProvider } from '@/providers/app'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider isRtl={false}>
      <Component {...pageProps} />
    </AppProvider>
  )
}
export default MyApp
