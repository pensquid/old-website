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
    action='Join us'
    href='https://discord.gg/X93TsZQ'
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
      <Member for='Kognise' avatar='389576827754250241/eeeb23a12ec6e97f30699dc0276534b4' />
      <Member for='Ryois' avatar='524738797338886184/ec914720e0c7b88e4f696e4cb253f52b' />
      <Member for='jokur' avatar='581319977265790986/a_4f50a187ad2a13583aee747ff55c4fe4' />
      <Member for='Wfenpo' avatar='514563401351954434/3dabe3f903ed7c471e3459a733bd9543' />
      <Member for='Ara' avatar='270615936057212928/a_813012b2b4edf196b5f44b6439fa01c3' />
      <Member for='fame' avatar='428656277716074506/c138bc2df7ed8a6aa198ad21acf349a6' />
    </Grid>
  </Section>
  <Section title='Our mission'>
    <p>
      Our mission is twofold: to bring hackers and programmers together in a fun community without the people who ruin everything, and to encourage the next generation of developers and help them learn.
    </p>
    <p>
      We accomplish the first with a state-of-the-art verification system based on our devoted staff team and a bot we wrote.
    </p>
    <p>
      And we accomplish the second simply by being as supportive as we can and offering whatever help and resources we can find.
    </p>
  </Section>
  <Section title='Projects'>
    <Grid lg={3} md={2} sm={1}>
      <Project title='Website' href='https://pwnsquad.net/' status='working'>
        The beautiful website you're looking at right now!
      </Project>
      <Project title='Term' href='https://discordbots.org/bot/520710130598150144' status='offline'>
        A Discord bot for running commands in secure sandboxes.
      </Project>
      <Project title='PwnBot' status='working'>
        A bot to automate some tiresome server management tasks.
      </Project>
      <Project title='Bored' href='https://bored.pwnsquad.net/' status='unstable'>
        A simple and beautiful optionally anonymous message board.
      </Project>
      <Project title='Project Portal' href='https://portal.kognise.dev/' status='working'>
        A collection of Dockerized microservices and tools.
      </Project>
      <Project title='Pot' status='working'>
        An SSH honeypot to catch big bad hackers.
      </Project>
      <Project title='Fish' href='https://signin.account.google.com.goo.gl.gggle.ga/' status='working'>
        A Google login phishing page created for educational purposes.
      </Project>
      <Project title='CTFBot' href='https://discordapp.com/api/oauth2/authorize?client_id=580257069760905216&permissions=0&scope=bot' status='development'>
        A simple Discord bot for playing hacking CTFs.
      </Project>
      <Project title='PwnHost' status='development'>
        Simple and reliable personal hosting for any application.
      </Project>
    </Grid>
  </Section>
</>