import theme from 'theme'

const Section = (props) => <section>
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
      line-height: 1.6;
    }
    h1 {
      font-size: 2em;
    }
  `}</style>
</section>

export default Section
