export default (props) => (
  <figure>
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
      }
      figure:hover img {
        border-radius: 20px;
      }
      figcaption {
        margin-top: 10px;
        text-align: center;
      }
      @media only screen and (max-width: 696px) {
        figure {
          display: ${props.hidden === 'md' ? 'none' : 'block'};
        }
      }
      @media only screen and (max-width: 400px) {
        figure {
          display: ${props.hidden === 'sm' ? 'none' : 'block'};
        }
      }
    `}</style>
  </figure>
)
