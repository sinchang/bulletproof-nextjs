import { CLIENT_VAR, SERVER_VAR } from '@/config'
import { Button } from '@chakra-ui/button'
import type { NextPage } from 'next'
import { useEffect } from 'react'

const Home: NextPage = () => {
  console.log(SERVER_VAR)
  useEffect(() => {
    console.log(CLIENT_VAR)
  }, [])

  return (
    <div>
      <Button display="block" my="2" ms="24">
        Large Button
      </Button>
      <Button size="small">Small Button</Button>
    </div>
  )
}

export default Home
