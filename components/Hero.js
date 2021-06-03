import theme from 'theme'

const Hero = (props) => <section>
  <div className='container'>
    <img className='logo' src='/static/logo-new.png' />
    <h1>{props.title}</h1>
    {props.subtitle && <h2>{props.subtitle}</h2>}
    {props.action && <a className='action' href={props.href} target='_blank'>{props.action} &raquo;</a>}
  </div>

  <style jsx>{`
    section {
      padding: 100px ${theme.extraPadding};
      background: #212529;
      color: #ffffff;
    }
    .container {
      max-width: ${theme.width};
      margin: 0 auto;
    }
    .logo {
      width: 100px;
      height: 100px;
      user-select: none;
      pointer-events: none;
      border-radius: 30%;
    }
    h1 {
      font-size: 3em;
    }
    h2 {
      line-height: 1.8;
      font-weight: normal;
    }
    .action {
      display: inline-block;
      margin-top: 20px;
      color: #ffffff;
      text-decoration: none;
      background: ${theme.accent};
      padding: 14px;
      user-select: none;
    }
    .action:hover {
      background: ${theme.hover};
    }
  `}</style>
</section>

export default Hero