import React from 'react'
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document'
import nookies from 'nookies'
import { renderStatic } from '@/utils/emotion'
import { getRtlDirection } from '@/utils/rtl'

interface Props extends DocumentInitialProps {
  languageCode: string
}

export default class AppDocument extends Document<Props> {
  static async getInitialProps(ctx: DocumentContext): Promise<Props> {
    const page = await ctx.renderPage()
    const { css, ids } = await renderStatic(page.html)
    const initialProps = await Document.getInitialProps(ctx)
    const cookies = nookies.get(ctx)

    return {
      ...initialProps,
      languageCode: cookies.languageCode || 'en',
      styles: (
        <>
          {initialProps.styles}
          <style data-emotion={`css ${ids.join(' ')}`} dangerouslySetInnerHTML={{ __html: css }} />
        </>
      ),
    }
  }

  render() {
    const languageCode = this.props.languageCode
    const dir = getRtlDirection(languageCode)

    return (
      <Html lang={languageCode} dir={dir}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
