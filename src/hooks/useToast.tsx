import { Toast } from '@/components/Toast'
import { UseToastOptions, useToast as useChakraToast } from '@chakra-ui/react'

export const useToast = () => {
  const chakraToast = useChakraToast()

  const toastImplementation = (options: UseToastOptions) =>
    chakraToast({
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

  return Object.assign(toastImplementation, chakraToast)
}
