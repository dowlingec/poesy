import React, { useState } from "react";

function NewPoemForm() {
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [content, setContent] = useState("")

  const handleSubmit = () => {
    alert("SUBMIT INFO")
    (async () => {
      
    })
  }

  return (
    <form className="new-poem-form" onSubmit={handleSubmit}>
      <input placeholder="Title" onChange={(event) => {setTitle(event.target.value)}}/>
      <input placeholder="Author" onChange={(event) => {setAuthor(event.target.value)}}/>
      <textarea placeholder="Write your masterpiece here..." rows={10} onChange={(event) => {setContent(event.target.value)}}/>
      <input type="submit" value="Share your masterpiece" />
      {console.log("user input", title, author, content)}
    </form>
  );
}

export default NewPoemForm;
