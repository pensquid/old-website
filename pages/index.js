import Hero from 'components/Hero'
import Section from 'components/Section'
import Card from 'components/Card'
import Member from 'components/Member'
import Grid from 'components/Grid'
import Project from 'components/Project'
import Head from 'next/head'

export default () => <>
  <Head>
    <title>PwnSquad</title>
    <meta itemProp='name' content='PwnSquad' />
    <meta name='twitter:title' content='PwnSquad' />
    <meta name='og:title' content='PwnSquad' />
  </Head>

  <Hero
    title='PwnSquad'
    subtitle='A Discord-based programming community that welcomes people of all skillsets'
    action='Join us'
    href='https://discord.gg/X93TsZQ'
  />

  <Section title='How it works'>
    <Grid lg={3} md={1}>
      <Card title='Verification'>
        Join the server and tell us a little about yourself! Prove you're different from the thousands of bots.
      </Card>
      <Card title='Community'>
        Although first and foremost we're a coding server, we have an active, friendly, community.
      </Card>
      <Card title='Help'>
        Learning a new language, or maybe never coded before? Just ask in our special topics channels.
      </Card>
    </Grid>
  </Section>

  <Section title='Our amazing staff'>
    <Grid lg={6} md={3} sm={2}>
      <Member for='Kognise' id='389576827754250241' />
      <Member for='Ara' id='270615936057212928' />
      <Member for='jokur' id='581319977265790986' />
      <Member for='Wfenpo' id='514563401351954434' />
      <Member for='Avedith' id='598023504998170654' />
      <Member for='Jukeub' id='372093146680655872' />
    </Grid>
  </Section>

  <Section title='Our mission'>
    <p>
      Our mission is twofold: to bring hackers and programmers together in a fun community, and to encourage the next generation of amazing developers to learn new things and thrive.
    </p>
    <p>
      We are devoted to being as supportive and friendly as we can and offering help and resources. Have a problem? PwnSquad&apos;s staff and helpers can help you fix it.
    </p>
    <p>
      We have channels for the latest curated tech news, fun polls, resources, and just cool stuff in general. Occasoinally we even organize CTFs and hackathons!
    </p>
  </Section>
  
  <Section title='Projects'>
    We are in the middle of a small outage due to server migration.
    
    <Grid lg={3} md={2} sm={1}>
      <Project title='Website' href='https://pwnsquad.net/' status='working'>
        The beautiful website you're looking at right now!
      </Project>
      <Project title='Term' href='https://discordbots.org/bot/520710130598150144' status='unstable'>
        A Discord bot for running commands in secure sandboxes.
      </Project>
      <Project title='PwnBot' status='working'>
        A bot to automate some tiresome server management tasks.
      </Project>
      <Project title='Bored' href='https://bored.pwnsquad.net/' status='offline'>
        A simple and beautiful optionally anonymous message board.
      </Project>
      <Project title='Project Portal' href='https://portal.kognise.dev/' status='offline'>
        A collection of Dockerized microservices and tools.
      </Project>
      <Project title='Pot' status='offline'>
        An SSH honeypot to catch big bad hackers.
      </Project>
      <Project title='Fish' href='https://signin.account.google.com.goo.gl.gggle.ga/' status='offline'>
        A Google login phishing page created for educational purposes.
      </Project>
      <Project title='CTFBot' href='https://discordapp.com/api/oauth2/authorize?client_id=580257069760905216&permissions=0&scope=bot' status='offline'>
        A simple Discord bot for playing hacking CTFs.
      </Project>
      <Project title='PwnHost' status='development'>
        Simple and reliable personal hosting for any application.
      </Project>
    </Grid>
  </Section>
</>
