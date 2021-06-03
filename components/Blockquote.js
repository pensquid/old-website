const Blockquote = (props) => <blockquote>
  {props.children}

  <style jsx>{`
    blockquote {
      margin-left: 0;
      border-left: 6px solid #ced4da;
      padding: 10px;
      padding-left: 20px;
      font-weight: bold;
    }
  `}</style>
</blockquote>

export default Blockquote