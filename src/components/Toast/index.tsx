import React, { ReactNode } from 'react'
import { CheckCircleIcon, InfoOutlineIcon, WarningIcon, WarningTwoIcon } from '@chakra-ui/icons'
import { CloseButton } from '@chakra-ui/close-button'
import { Alert, AlertDescription, AlertStatus } from '@chakra-ui/alert'
import { Box } from '@chakra-ui/layout'
import { ThemeTypings } from '@chakra-ui/styled-system'

type ToastStatus = AlertStatus | 'default'

type ToastMap = {
  [k in ToastStatus]: {
    icon: ReactNode
    bg: ThemeTypings['colors']
    color: ThemeTypings['colors']
  }
}

const toastMap: ToastMap = {
  info: {
    icon: <InfoOutlineIcon color="white" boxSize="5" />,
    bg: 'blue.normal',
    color: 'white',
  },
  success: {
    icon: <CheckCircleIcon color="white" boxSize="5" />,
    bg: 'green.normal',
    color: 'white',
  },
  warning: {
    icon: <WarningTwoIcon color="gray.7" boxSize="5" />,
    bg: 'yellow.normal',
    color: 'gray.7',
  },
  error: {
    icon: <WarningIcon color="white" boxSize="5" />,
    bg: 'red.normal',
    color: 'white',
  },
  default: {
    icon: <InfoOutlineIcon color="white" boxSize="5" />,
    bg: 'gray.6',
    color: 'white',
  },
}

export interface ToastProps {
  status?: ToastStatus
  description: ReactNode
  isClosable?: boolean
  onClose: () => void
}

export const Toast = ({
  status = 'default',
  description,
  isClosable = false,
  onClose,
}: ToastProps) => (
  <Alert colorScheme={toastMap[status].bg} borderRadius="lg" alignItems="center">
    {toastMap[status].icon}
    <Box flex="1" color={toastMap[status].color} ms="5">
      <AlertDescription display="block">{description}</AlertDescription>
    </Box>
    {isClosable && <CloseButton color={toastMap[status].color} onClick={onClose} />}
  </Alert>
)
