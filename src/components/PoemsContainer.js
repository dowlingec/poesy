
   
import React, {useState, useEffect } from "react";
import Poem from "./Poem";

function PoemsContainer() {
  const [poemsData, setPoemsData] = useState([])

  useEffect(() =>{
    (async () => {
      let req = await fetch(`http://localhost:8004/poems`)
      let res = await req.json()
      // console.log("FETCHED DB", res)
      setPoemsData(res)
    })()
  }, [])
  console.log("fetch data", poemsData)
  return (
    <div className="poems-container">
      { poemsData.map((poem) => {
        return <Poem key={poem.id} poem={poem}/>
      })}
    </div>
  );
}

export default PoemsContainer;