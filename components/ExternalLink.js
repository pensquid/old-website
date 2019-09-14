export default (props) => (
  <a href={props.href} rel='noopener noreferer'>
    {props.children}

    <style jsx>{`
      a {
        text-decoration: none;
        color: #339af0;
      }
      a:hover {
        text-decoration: underline;
      }
    `}</style>
  </a>
)