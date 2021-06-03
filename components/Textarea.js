const Textarea = (props) => <>
  <textarea placeholder={props.placeholder} value={props.value} onChange={props.onChange} />

  <style jsx>{`
    textarea {
      display: block;
      resize: vertical;
      width: 100%;
      font-size: inherit;
      font-family: inherit;
      padding: 14px;
      box-sizing: border-box;
      border: none;
      background: #343a40;
      color: inherit;
      margin-bottom: 20px;
    }

    ::placeholder {
      color: #868e96;
    }
  `}</style>
</>

export default Textarea