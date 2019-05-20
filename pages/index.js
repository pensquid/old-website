import Hero from '../components/Hero'
import Section from '../components/Section'
import Card from '../components/Card'
import Member from '../components/Member'
import Grid from '../components/Grid'
import Project from '../components/Project'
import Head from 'next/head'

export default () => <>
  <Head>
    <title>PwnSquad</title>
    <meta itemprop='name' content='PwnSquad' />
    <meta name='twitter:title' content='PwnSquad' />
    <meta name='og:title' content='PwnSquad' />
  </Head>

  <Hero
    title='PwnSquad'
    subtitle='A Discord hacking server without the people who ruin it all'
  />
  <Section title='How it works'>
    <Grid lg={3} md={1}>
      <Card title='Entry'>
        You join the server and have 7 days to get verified. A bot will notify you how much time you have left.
      </Card>
      <Card title='Verification'>
        Tell us a little about yourself and why you want to join and the staff will decide whether or not to let you through.
      </Card>
      <Card title='Fun'>
        Assuming you got in, you can start having fun! Make sure to check out some channels and meet the community.
      </Card>
    </Grid>
  </Section>
  <Section title='Our amazing staff'>
    <Grid lg={6} md={3} sm={2}>
      <Member for='Kognise' avatar='389576827754250241/fa1b9fd07aadeda1fe432c9c862baba7' />
      <Member for='Ryois' avatar='524738797338886184/5dc9206f8675da669bb0f606fd3cd613' />
      <Member for='jokur' avatar='347406599926710274/a5c89b67600ea9aea0f6159769716970' />
      <Member for='Wfenpo' avatar='514563401351954434/3e5213584d1d967d61e063984ee9df07' />
      <Member for='Ara' avatar='270615936057212928/308034874d82923c59fe50fb5deabf81' />
      <Member for='fame' avatar='428656277716074506/c138bc2df7ed8a6aa198ad21acf349a6' />
    </Grid>
  </Section>
  <Section title='Our mission'>
    <p>
      Our mission is twofold: to bring hackers and programmers together in a fun community without the people who ruin everything, and to encourage the next generation of developers and help them learn.
    </p>
    <p>
      We accomplish the first with a state-of-the art verification system based on our devoted staff team and a bot we wrote.
    </p>
    <p>
      And we accomplish the second simply by being as supportive as we can and offering whatever help and resources we can find.
    </p>
  </Section>
  <Section title='Projects'>
    <Grid lg={3} md={2} sm={1}>
      <Project title='Term' status='offline'>
        A Discord bot for running commands in secure sandboxes.
      </Project>
      <Project title='PwnBot' status='working'>
        A bot to automate some tiresome server management tasks.
      </Project>
      <Project title='Bored' status='raided'>
        A simple and beautiful optionally anonymous message board.
      </Project>
      <Project title='Project Portal' status='working'>
        A collection of Dockerized microservices and tools.
      </Project>
      <Project title='Pot' status='working'>
        An SSH honeypot to catch big bad hackers.
      </Project>
      <Project title='Fish' status='working'>
        A Google login phishing page created for educational purposes.
      </Project>
    </Grid>
  </Section>
</>