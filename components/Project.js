import theme from 'theme'

const Project = (props) => <div>
  <h2>
    {props.href ? <a href={props.href} target='_blank'>{props.title}</a> : props.title}
  </h2>
  <p className='status'>
    <span className='orb'></span>{' '}
    {props.status}
  </p>
  <p>{props.children}</p>

  <style jsx>{`
    h2 {
      margin-bottom: 8px;
    }
    h2 a {
      color: inherit;
      text-decoration: none;
    }
    h2 a:hover {
      text-decoration: underline;
    }
    .status {
      text-transform: uppercase;
      color: ${theme.statuses[props.status]};
      margin-top: 0;
    }
    .orb {
      display: inline-block;
      width: 10px;
      height: 10px;
      background: ${theme.statuses[props.status]};
      border-radius: 50%;
    }
  `}</style>
</div>

export default Project