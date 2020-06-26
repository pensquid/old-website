import theme from 'theme'

export default (props) => (
  <a href={props.href} rel='noopener noreferer'>
    {props.children}

    <style jsx>{`
      a {
        text-decoration: none;
        color: ${theme.accent};
      }
      a:hover {
        text-decoration: underline;
      }
    `}</style>
  </a>
)