import React, { useState } from "react";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

function App() {
  const [isHidden, setIsHidden] = useState(false)
  const toggleIsHidden = () => {
    // alert("I have been clicked")
    setIsHidden(!isHidden)
  }

  return (
    <div className="app">
      <div className="sidebar">
        <button onClick={toggleIsHidden}>Show/hide new poem form</button>
        { isHidden === true ? <NewPoemForm /> : null}
      </div>
      <PoemsContainer />
    </div>
  );
}


export default App;