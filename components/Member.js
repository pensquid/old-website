const Member = (props) => <figure>
  <img
    src={`https://davatar.pwnsquad.net/${props.id}`}
    alt={`${props.for}'s Profile Picture`}
  />
  <figcaption>{props.for}</figcaption>
  
  <style jsx>{`
    figure {
      margin: 0;
      flex: 1;
    }
    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      margin: 0 auto;
      display: block;
      transition: border-radius 300ms ease;
      background-color: #000000;
      user-select: none;
      pointer-events: none;
    }
    figure:hover img {
      border-radius: 30%;
    }
    figcaption {
      margin-top: 10px;
      text-align: center;
    }
  `}</style>
</figure>

export default Member