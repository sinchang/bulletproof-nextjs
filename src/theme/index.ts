import { extendTheme, Theme } from '@chakra-ui/react'
import { styles } from './styles'
import { foundations } from './foundations'
import { components } from './components'

export const theme: Partial<Theme> = extendTheme({
  styles,
  components,
  ...foundations,
})
