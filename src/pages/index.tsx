import { CLIENT_VAR, SERVER_VAR } from '@/config'
import type { NextPage } from 'next'
import { useEffect } from 'react'

const Home: NextPage = () => {
  console.log(SERVER_VAR)
  useEffect(() => {
    console.log(CLIENT_VAR)
  }, [])

  const hello = 'Hello World'
  return <div>{hello}</div>
}

export default Home
