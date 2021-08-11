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
    subtitle='The Discord-based programming community for everyone, experienced and inexperienced'
    action='Join 900+ members'
    href='https://discord.gg/A2uE8rksqy'
  />

  <Section title='Our mission'>
    <p>
      Our mission is twofold: to bring hackers and programmers together in a fun community, and to encourage the next generation of amazing developers to learn new things and thrive.
    </p>
    <p>
      We are devoted to being as supportive and friendly as we can and offering help and resources. Struggling with something? PwnSquad&apos;s staff and helpers can help you fix it.
    </p>
    <p>
      We have channels for the latest curated tech news, fun polls, resources, and just cool stuff in general. Occasionally we even organize CTFs and hackathons where you can win real things! So after all, why not join?
    </p>
  </Section>

  <Section title='Our staff'>
    <Grid lg={3} md={3} sm={3}>
      <Member for='Kognise' id='389576827754250241' />
      <Member for='bruh.tar.gz' id='367439346908790805' />
      <Member for='Avedith' id='598023504998170654' />
      <Member for='jokur' id='581319977265790986' />
    </Grid>
  </Section>

  <Section title='How it works'>
    <Grid lg={3} md={1}>
      <Card title='Verification'>
        Join the server and simply agree to the rules and tell us a little bit about yourself!
      </Card>
      <Card title='Community'>
        Although first and foremost we're a coding server, we have an active, friendly, community.
      </Card>
      <Card title='Help'>
        Learning a new language, or maybe never coded before? Just ask in our special topics channels.
      </Card>
    </Grid>
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
      <Project title='Asmodeus' href='https://asmodeus.pwnsquad.net/' status='working'>
        A massive collection of free knowledge in the form of pdfs.
      </Project>
      <Project title='Pot' status='offline'>
        An SSH honeypot to catch big bad hackers.
      </Project>
      <Project title='CTFBot' href='https://discordapp.com/api/oauth2/authorize?client_id=580257069760905216&permissions=0&scope=bot' status='offline'>
        A simple Discord bot for playing hacking CTFs.
      </Project>
    </Grid>
  </Section>
</>
