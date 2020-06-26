import Hero from 'components/Hero'
import Section from 'components/Section'
import Blockquote from 'components/Blockquote'
import ExternalLink from 'components/ExternalLink'
import Head from 'next/head'

export default () => <>
  <Head>
    <title>Don&apos;t Ask to Ask | PwnSquad</title>
    <meta itemprop='name' content='Don&apos;t Ask to Ask' />
    <meta name='twitter:title' content='Don&apos;t Ask to Ask' />
    <meta name='og:title' content='Don&apos;t Ask to Ask' />
  </Head>

  <Hero
    title='Don&apos;t ask to ask'
    subtitle='Asking if anyone is online who can answer your question wastes everyone&apos;s time &mdash; here&apos;s why'
  />

  <Section title='The problem'>
    <p>
      You&apos;ve probably been directed here by a well-intentioned person who just wants to help.
      You haven&apos;t messed up, but this page can help you be a better community member!
    </p>
    <p>Here&apos;s an example of asking to ask:</p>
    <Blockquote>
      Anyone here to answer a noob's question?
    </Blockquote>
    <p>
      To get your answer, you now need to wait for someone to say they can and are willing to help.
      You probably didn&apos;t mean to imply it, but you&apos;re asking people to take responsibility for answering your question.
    </p>
    <p>
      After a lot more back-and-forth, your question will finally (hopefully) be answered, probably a few hours after you asked it because people exist in different timezones.
    </p>
  </Section>

  <Section title='The solution'>
    <p>
      Here&apos;s the thing!{' '}
      <strong>You can get your question anwered much more quickly <em>and</em> not ask people to commit.</strong>{' '}
      And it&apos;s super easy for you.
    </p>
    <p>
      Instead of asking if anyone&apos;s online, just ask your question.
    </p>
    <Blockquote>
      I take notes on Kali (VM) on Cherrytree and OneNote on Windows (host).
      I want to completely shift notetaking to Kali but want to sync my notes to the cloud.
      I am wary about logging into any internet account on Kali.
      Do you guys have any tips/advice on how to accomplish this?
    </Blockquote>
  </Section>
  
  <Section title='No hi'>
    <p>
      One variant of asking to ask is saying hi/hello instead of just going ahead and asking your question.
    </p>
    <p>
      For more information on asking good questions, see Stack Overflow's amazing guide on{' '}
      <ExternalLink href='https://stackoverflow.com/help/how-to-ask'>how to ask a good question</ExternalLink>.
    </p>
  </Section>
</>