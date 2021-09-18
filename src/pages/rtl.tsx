import { useEffect } from 'react'
import { Button } from '@chakra-ui/button'
import type { NextPage } from 'next'
import { setCookie } from 'nookies'

const RTL: NextPage = () => {
  useEffect(() => {
    setCookie(null, 'languageCode', 'ar', {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    })
  })

  return (
    <div>
      <Button display="block" my="2" ms="24">
        RTL Switch
      </Button>
    </div>
  )
}

export default RTL
