import Head from 'next/head'
import { useEffect } from 'react'

export default () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      location.href = 'https://www.youtube.com/watch?v=GHMjD0Lp5DY'
    }, 2000)
    return () => clearTimeout(timeout)
  }, [])

  return <>
    <Head>
      <title>totally not an ip logger</title>
      <meta itemProp='name' content='totally not an ip logger' />
      <meta name='twitter:title' content='totally not an ip logger' />
      <meta name='og:title' content='totally not an ip logger' />
    </Head>

    <p>It's not an ip logger, it's a rickroll. You have two seconds.</p>
  </>
}
