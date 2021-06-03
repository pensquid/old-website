const Grid = (props) => <div>
  {props.children}

  <style jsx>{`
    div {
      display: grid;
      grid-template-columns: repeat(${props.lg || 3}, 1fr);
      grid-gap: 14px;
    }
    @media only screen and (max-width: 696px) {
      div {
        ${props.md ? `grid-template-columns: repeat(${props.md}, 1fr)` : ''};
      }
    }
    @media only screen and (max-width: 400px) {
      div {
        ${props.sm ? `grid-template-columns: repeat(${props.sm}, 1fr)` : ''};
      }
    }
  `}</style>
</div>

export default Grid