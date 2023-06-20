import './style.css'
import React from "react";
import { useState } from "react";
import Totalplayers from './Totalplayers';


export default function HomePage(props) {
  const [name, setName] = useState("");
  const[display,setDisplay] = useState('none')

  const validName = () => {
    if (name.length > 0) props.start(name);
    else {
      alert("No name Enterd!");
    }
  };

    const showPlayers = () =>{
      if(display=='block'){
        setDisplay('none')

    }
    else{
        setDisplay('block')
    }
}
  return (
    <div className='table'>
      <h1>ready for WAR?</h1>
      <input onChange={(e) => { setName(e.target.value); }} type="text" />
      <br/>
      <button onClick={validName}>START</button>
      <button onClick={()=>{showPlayers()}}>Show table</button>
      <div style={{display: display}}>
        <Totalplayers list={props.pl} />
        </div>
    </div>
  );
}