import Hero from 'components/Hero'
import Section from 'components/Section'
import Head from 'next/head'
import Link from 'next/link'
import theme from 'theme'

export default () => <>
  <Head>
    <title>Code of Conduct | PwnSquad</title>
    <meta itemProp='name' content='Don&apos;t Ask to Ask' />
    <meta name='twitter:title' content='Don&apos;t Ask to Ask' />
    <meta name='og:title' content='Don&apos;t Ask to Ask' />
  </Head>

  <Hero
    title='Code of Conduct'
    subtitle='Our collection of rules and guidelines to foster a great community for everyone'
  />

  <Section title='Rules'>
    <p>
      We will warn, kick, or potentially ban you for not following these. If you have any questions, feel free to reach out to any staff member via direct message.
    </p>
    <ol>
    <li>Swearing is allowed, but don't go overboard. "It's just a joke" isn't a valid excuse.</li>
      <li>Our server is not a marketplace. Attempting to buy or sell anything, especially exploits and programs, is not permitted.</li>
      <li>We can help you learn things about cyber security and the likes, but nothing illegal or against <a target='_blank' href='https://discordapp.com/terms'>Discord's TOS</a> is permitted.</li><li>We strictly prohibit encouraging self harm or suicide. That includes telling people to kill themselves jokingly.</li>
      <li>Don't advertise. Feel free to share projects! Just use your brain and avoid server invites, referral codes, or anything non-beneficial and commercial.</li>
      <li>Don't abuse glitches in Discord or other platforms, and don't try to "hack" anyone otherwise.</li>
      <li>Do not include characters that are not easily typeable on a US keyboard in your username/nickname.</li>
      <li>Discrimination based on age, nationality, race, (dis)ability, gender (identity or expression), sexuality, religion, or ANYTHING ELSE is not allowed. In any capacity. Period.</li>
      <li>Unwanted sexual advances or derogatory remarks are not okay in any way. Furthermore, try to refrain from using terminology that may be considered NSFW and/or make others feel uncomfortable. We realize everyone communicates differently and this is hard, so just do your best and we'll talk to you if something comes up. Context matters.</li>
      <li>Any sort of spam, especially in the form of image/gif reposts aren't permitted either. While usually it's in good spirit it makes chat hard to read for others and pushes past messages up.</li>
      <li>Use a trigger warning when posting anything which may be triggering to others. This is especially pertinent in <code>#venting</code>. More information is below.</li>
      <li>Be thoughtful in how you communicate.</li>
    </ol>
    <p>
      Kindly keep topics in their respective channels. If it doesn't fit into <code>#programming</code>, <code>#hacking</code>, or <code>#lang-debate</code>, please use <code>#other-topics</code>. Keep memes to <code>#memes</code>. General chat goes in <code>#lobby</code>.
    </p>
  </Section>

  <Section title='Trigger warnings'>
    <p>Please use TWs (trigger warnings) to protect others from content that may make them feel uncomfortable or worse. Everyone will thank you.</p>
    <p>How to properly TW a post:</p>
    <ul>
      <li>Start with the trigger warning. It can just be a general word about the topic at hand. <code>tw: like this</code></li>
      <li>Use double bars on both sides of the message text to spoiler it</li>
      <li>Images, when uploaded, will have a checkbox near the bottom giving the option to spoiler it. Please do, if necessary. On mobile this option isn't available, please don't post images in this case</li>
      <li>Use arrowhead brackets (&lt;&gt;) on both sides of a link to stop the link from embedding</li>
    </ul>
    <p>This system is not for circumventing the rules. For example, you can't say something NSFW or advertise just because you used a CW or TW. Use common sense :/</p>
    <p>Things you should TW:</p>
    <ul>
      <li>Rape or sexual abuse</li>
      <li>Self harm or suicide</li>
      <li>Mental disabilities</li>
      <li>Anything else that is potentially triggering</li>
    </ul>
    <p>Things you should <em>not</em> TW (and aren't allowed anyways):</p>
    <ul>
      <li>Porn</li>
      <li>Sexual comments</li>
      <li>Slurs</li>
      <li>Anything that violates our rules</li>
    </ul>
  </Section>

  <Section title='Reporting issues'>
    <p>We hope nothing comes up, but we understand things happen.</p>
    <p>These are some of the available venues of communication:</p>
    <ul>
      <li>DM a staff member on Discord, <code>Kognise#6356</code> is the owner and her DMs are always open</li>
      <li>Email <code>hi@kognise.dev</code></li>
      <li>If you would prefer to remain anonymous, use our <Link href='/vent'><a target='_blank'>venting channel bot</a></Link></li>
    </ul>
    <p>We take everything serious seriously. Don't be afraid to contact us. We're here for you.</p>
  </Section>

  <Section title='Acknowledgements'>
    <p>We took inspiration from <a target='_blank' href='https://hackclub.com/conduct/'>Hack Club's amazing CoC</a> which in turn is based on many others.</p>
  </Section>
  
  <style jsx>{`
    a {
      color: ${theme.accent};
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
      filter: brightness(1.1);
    }

    code {
      font-family: inherit;
      font-size: inherit;
      background: #000000;
      padding: 4px;
      border-radius: 4px;
    }
  `}</style>
</>