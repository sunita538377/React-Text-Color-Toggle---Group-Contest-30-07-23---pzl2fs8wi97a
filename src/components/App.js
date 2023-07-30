import React, {useEffect, useState} from 'react'
import  '../styles/App.css';

const App = () => {
  
  const [tg, settoggle]=useState(false);
  const handleClick = () => {
    settoggle(!tg);
 
  return (
    <div id="main">
      <p className={tg ? "blueColor" : "redColor"} >Newton School</p>
      <button id='button' onClick={(handleClick)=>settoggle(!tg) }>Change Style</button>
    </div>
  )
}


export default App;
