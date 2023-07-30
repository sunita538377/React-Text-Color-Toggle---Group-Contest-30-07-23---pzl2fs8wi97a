import React, {useEffect, useState} from 'react'
import  '../styles/App.css';

const App = () => {
  
  const [tg, settoggle]=useState(false);
  
 
  return (
    <div id="main">
      <p className={tg ? "blueColor" : "redColor"} >Newton School</p>
      <button id='button' onClick={()=>settoggle(!tg) }>Change Style</button>
    </div>
  )
}


export default App;
