import { Toast } from '@/components/Toast'
import { UseToastOptions, useToast as useChakraToast } from '@chakra-ui/react'

export const useToast = () => {
  const toast = useChakraToast()

  return (options: UseToastOptions) =>
    toast({
      ...options,
      position: 'top-right',
      render: ({ onClose }) => (
        <Toast
          status={options.status}
          description={options.description}
          isClosable={options.isClosable}
          onClose={onClose}
        />
      ),
    })
}
