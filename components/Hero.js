import theme from 'theme'

export default (props) => (
  <section>
    <div className='container'>
      <img className='logo' src='/static/logo.png' />
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
      }
      h1 {
        font-size: 3em;
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
        text-decoration: underline;
      }
    `}</style>
  </section>
)