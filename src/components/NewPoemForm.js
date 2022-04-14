import React, { useState } from "react";

function NewPoemForm() {
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [content, setContent] = useState("")
  

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("SUBMIT INFO")
    const newPoem = {
      "title": title,
      "author": author,
      "content": content,
    };
    
    (async () => {
      let req = await fetch(`http://localhost:8004/poems`,
      {
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body : JSON.stringify(newPoem)
      }
      )
      let newObj = req.json()
      console.log("new one", newObj)
    })()
  }

  return (
    <form className="new-poem-form" onSubmit={handleSubmit}>
      <input placeholder="Title" onChange={(event) => {setTitle(event.target.value)}}/>
      <input placeholder="Author" onChange={(event) => {setAuthor(event.target.value)}}/>
      <textarea placeholder="Write your masterpiece here..." rows={10} onChange={(event) => {setContent(event.target.value)}}/>
      <input type="submit" value="Share your masterpiece" />
      {/* {console.log("user input", title, author, content)} */}
    </form>
  );
}

export default NewPoemForm;