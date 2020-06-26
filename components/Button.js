import theme from 'theme'

export default (props) => (
  <button onClick={props.onClick} type={props.type} disabled={props.disabled}>
    {props.children}

    <style jsx>{`
      button {
        display: inline-block;
        margin-top: 20px;
        color: #ffffff;
        background: ${theme.accent};
        padding: 14px;
        font-size: inherit;
        border: none;
        font-family: inherit;
        cursor: pointer;
      }

      button:hover:not([disabled]) {
        filter: brightness(1.1);
      }

      button[disabled] {
        background: #343a40;
        color: #868e96;
        cursor: not-allowed;
      }
    `}</style>
  </button>
)