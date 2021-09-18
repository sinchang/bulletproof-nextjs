import { UseToastOptions, useToast as useChakraToast } from '@chakra-ui/react'
import { Toast } from '@/components/Elements'

export const useToast = () => {
  const chakraToast = useChakraToast()

  const toastImplementation = (options: UseToastOptions) =>
    chakraToast({
      position: 'top-right',
      ...options,
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
