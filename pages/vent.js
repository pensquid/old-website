import { nanoid } from 'nanoid'
import { useState, useEffect } from 'react'

import Hero from 'components/Hero'
import Section from 'components/Section'
import Button from 'components/Button'
import Textarea from 'components/Textarea'
import Head from 'next/head'

export default () => {
  const [ seed, setSeed ] = useState('')
  const [ message, setMessage ] = useState('')

  useEffect(() => {
    const seed = localStorage.getItem('identitySeed') ?? nanoid()
    setSeed(seed)
  }, [])

  useEffect(() => {
    if (seed) localStorage.setItem('identitySeed', seed)
  }, [ seed ])

  return <>
    <Head>
      <title>Venting | PwnSquad</title>
      <meta itemprop='name' content='Venting' />
      <meta name='twitter:title' content='Venting' />
      <meta name='og:title' content='Venting' />
    </Head>

    <Hero
      title='Venting'
      subtitle='Anonymously send messages in #venting.'
    />

    <Section title='Form'>
      <form onSubmit={async (event) => {
        event.preventDefault()
        setMessage('')
        await fetch(`/api/vent?seed=${encodeURIComponent(seed)}&message=${encodeURIComponent(message)}`)
      }}>
        <Textarea placeholder='Message content' value={message} onChange={(event) => setMessage(event.target.value)} />
        <Button type='submit' disabled={!message.trim()}>Send</Button>
      </form>
    </Section>

    <Section title='Identity'>
      <p>
        You'll show up with an anonymized name, feel free to send anything.{' '}
        We'll be kind and respectful, and listen to what you have to say.{' '}
        No judgement!
      </p>
      <p>
        Your identity seed is: {seed}
      </p>
      <Button onClick={() => setSeed(nanoid())}>Reset identity</Button>
    </Section>
  </>
}