import theme from '../theme'

export default (props) => (
  <section>
    <div className='container'>
      <img className='logo' src='/static/logo.png' />
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
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
      }
      h1 {
        font-size: 3em;
      }
    `}</style>
  </section>
)