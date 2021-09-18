import { extendTheme, Theme } from '@chakra-ui/react'
import { components } from './components'
import { foundations } from './foundations'
import { styles } from './styles'

export const theme: Partial<Theme> = extendTheme({
  styles,
  components,
  ...foundations,
})
