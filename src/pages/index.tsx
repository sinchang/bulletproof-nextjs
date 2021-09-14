import { CLIENT_VAR, SERVER_VAR } from '@/config'
import { Button } from '@chakra-ui/button'
import type { GetServerSidePropsContext, NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import nookies from 'nookies'
import { useConfig } from '@/providers/config'
import { Text } from '@chakra-ui/layout'

const Home: NextPage = () => {
  console.log(SERVER_VAR)
  const router = useRouter()
  const config = useConfig()

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
