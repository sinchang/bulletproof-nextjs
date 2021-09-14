import { AppProvider } from '@/providers/app'
import { ConfigContextState } from '@/providers/config'
import type { AppContext, AppInitialProps, AppProps } from 'next/app'
import App from 'next/app'
import nookies from 'nookies'

type MyAppProps = { config: ConfigContextState }

function MyApp({ Component, pageProps, config }: AppProps & MyAppProps) {
  return (
    <AppProvider config={config}>
      <Component {...pageProps} />
    </AppProvider>
  )
}

MyApp.getInitialProps = async (appContext: AppContext): Promise<AppInitialProps & MyAppProps> => {
  const appProps = await App.getInitialProps(appContext)
  const cookies = nookies.get(appContext.ctx)
  const config: ConfigContextState = {
    languageCode: cookies.languageCode,
  }

  return { ...appProps, config }
}

export default MyApp
