import React, {useEffect, useState} from 'react'
import  '../styles/App.css';

const App = () => {
  
  const [togglest, settoggle]=useState("false");
  
  const togglefunc= ()=>{
    settoggle(!togglest);
  };
  
  return (
    <div id="main">
      <p className={togglest ? ".blueColor" : ".redColor"} >Newton School</p>
      <button id='button' onClick={togglefunc}>Change Style</button>
    </div>
  )
}


export default App;
