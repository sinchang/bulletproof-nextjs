import { CLIENT_VAR, SERVER_VAR } from '@/config'
import { Button } from '@chakra-ui/button'
import type { GetServerSidePropsContext, NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import nookies from 'nookies'
import { useConfig } from '@/providers/config'
import { Text } from '@chakra-ui/layout'
import { useToast } from '@/hooks/useToast'

const Home: NextPage = () => {
  console.log(SERVER_VAR)
  const id = 'test-toast'
  const router = useRouter()
  const config = useConfig()
  const toast = useToast()

  useEffect(() => {
    console.log(CLIENT_VAR)
  }, [])

  return (
    <div>
      <Button display="block" my="2" ms="24">
        Large Button
      </Button>
      <Button size="small">Small Button</Button>
      <Button display="block" my="2" onClick={() => router.push('/rtl')}>
        Go to RTL Page
      </Button>
      <Text>languageCode from ConfigProvider: {config.languageCode}</Text>
      <Button
        onClick={() => {
          if (!toast.isActive(id)) {
            toast({
              id,
              status: 'warning',
              description: 'hello world',
              isClosable: true,
            })
          }
        }}
      >
        Show Toast
      </Button>
    </div>
  )
}

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  console.log(context)
  nookies.set(context, 'languageCode', 'en', {
    maxAge: 30 * 24 * 60 * 60,
    path: '/',
  })
  return {
    props: {},
  }
}

export default Home
