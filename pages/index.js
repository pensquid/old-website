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
    subtitle='A Discord programming community that welcomes people of all skillsets'
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
      <Member for='Kognise' id='389576827754250241' />
      <Member for='Ara' id='270615936057212928' />
      <Member for='jokur' id='581319977265790986' />
      <Member for='Wfenpo' id='514563401351954434' />
      <Member for='Hat' id='267852040322023424' />
      <Member for='Ryois' id='524738797338886184' />
        
      <Member for='HazTheWaz' id='162502976521371648' />
      <Member for='Rut' id='314163417021677568' />
      <Member for='JackFly26' id='267062179918774273' />
      <Member for='Aiyan' id='208632825656639488' />
      <Member for='Anish' id='365958975201738764' />
      <Member for='Jukeub' id='372093146680655872' />
      <Member for='ProgramGeek01' id='539618266579206145' />
      <Member for='Scottybyrd' id='348354083389833218' />
        
      <Member for='fame' id='428656277716074506' />
      <Member for='audit0r' id='574746482167644160' />
      <Member for='pepsipu' id='475525381609357313' />
      <Member for='MANIC' id='274833304413274112' />
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
      Giveaways are common, and we try to give stuff that many people can appreciate. We have channels for the latest curated tech news, fun polls, resources, and just cool stuff in general.
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
      <Project title='Bored' href='https://bored.pwnsquad.net/' status='working'>
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
      <Project title='CTFBot' href='https://discordapp.com/api/oauth2/authorize?client_id=580257069760905216&permissions=0&scope=bot' status='working'>
        A simple Discord bot for playing hacking CTFs.
      </Project>
      <Project title='PwnHost' status='development'>
        Simple and reliable personal hosting for any application.
      </Project>
    </Grid>
  </Section>
</>
