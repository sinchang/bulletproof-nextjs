import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { Button } from '@chakra-ui/react'
import { useToast } from '@/hooks/useToast'

export default {
  title: 'Elements/Toast',
} as Meta

export function DefaultToast() {
  const toast = useToast()
  return (
    <Button
      onClick={() =>
        toast({
          description: 'This is a default toast.',
          isClosable: true,
        })
      }
    >
      Show Default Toast
    </Button>
  )
}

export function SuccessToast() {
  const toast = useToast()
  return (
    <Button
      onClick={() =>
        toast({
          description: "We've created your account for you.",
          status: 'success',
          isClosable: true,
          onCloseComplete: () => {
            console.log('close')
          },
        })
      }
    >
      Show Success Toast
    </Button>
  )
}

export function WarningToast() {
  const toast = useToast()
  return (
    <Button
      onClick={() =>
        toast({
          description: 'This is a warning.',
          status: 'warning',
          isClosable: true,
        })
      }
    >
      Show Warning Toast
    </Button>
  )
}

export function ErrorToast() {
  const toast = useToast()
  return (
    <Button
      onClick={() =>
        toast({
          description: 'Unable to create user account.',
          status: 'error',
          isClosable: true,
        })
      }
    >
      Show Error Toast
    </Button>
  )
}
