import { ComponentStyleConfig } from '@chakra-ui/theme'

export const ButtonStyles: ComponentStyleConfig = {
  baseStyle: {
    fontSize: 'sm',
    lineHeight: '6',
    minWidth: '324px',
    borderRadius: 'lg',
  },
  variants: {
    primary: {
      color: 'white',
      bgColor: 'primary',
    },
  },
  sizes: {
    large: {
      px: '4',
      py: '3',
      fontWeight: 'bold',
    },
    small: {
      px: '4',
      py: '1',
      fontWeight: 'medium',
    },
  },
  defaultProps: {
    variant: 'primary',
    size: 'large',
  },
}
