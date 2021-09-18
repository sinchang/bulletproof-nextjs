import { cache } from '@emotion/css'
import createEmotionServer, { EmotionCritical } from '@emotion/server/create-instance'

// https://github.com/vercel/next.js/blob/master/examples/with-emotion-vanilla
export const renderStatic = async (html: string): Promise<EmotionCritical> => {
  if (html === undefined) {
    throw new Error('did you forget to return html from renderToString?')
  }
  const { extractCritical } = createEmotionServer(cache)
  const { ids, css } = extractCritical(html)

  return { html, ids, css }
}
