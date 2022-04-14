import React from "react";

function Poem({poem}) {
  const {title, content, author } = poem
  
  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
      <p>
        <strong>- By {author}</strong>
      </p>
      <button>Mark as read</button>
    </div>
  );
}

export default Poem;
