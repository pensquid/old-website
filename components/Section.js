import theme from 'theme'

export default (props) => (
  <section>
    <div className='container'>
      <h1>{props.title}</h1>
      {props.children}
    </div>

    <style jsx>{`
      section {
        padding: ${theme.extraPadding};
      }
      .container {
        max-width: ${theme.width};
        margin: 0 auto;
      }
      h1 {
        font-size: 2em;
      }
    `}</style>
  </section>
)
