import "./style.css";
import Card from "./Card";
import { useState } from "react";

let playerPoint = 0,computerPoint = 0;
export default function GamePage(props) {
  const [index, setIndex] = useState(0);
    const checkCard = ()=>{
      if(props.computer.cardArr[index] > props.player.cardArr[index])
          computerPoint++;
      else if(props.computer.cardArr[index] < props.player.cardArr[index])
          playerPoint++;
      if(index == 25)
      {
          props.player.games++;
          if(playerPoint>computerPoint)
          {
              props.player.wins++;
              props.player.lastGame = true;
          }
          else{
              props.player.losse++;
              props.player.lastGame = false;
          }
          playerPoint = 0;
          computerPoint = 0;
          props.player.rounds++;
          let tempDeck = [...props.computer.cardArr,...props.player.cardArr];
          props.player.cardArr=[];
          props.computer.cardArr=[];
          for(let i=0;i<26;i++){
            let rand =  Math.floor(Math.random() * tempDeck.length);
            let temp = tempDeck.splice(rand,1);
            props.player.cardArr[i]=temp;
          }
          for(let i=0;i<26;i++){
            let rand =  Math.floor(Math.random() * tempDeck.length);
            let temp = tempDeck.splice(rand,1);
            props.computer.cardArr[i]=temp;
          }
          props.next(2);
      }
    console.log(computerPoint, playerPoint);
    setIndex(index + 1);
  };
  return (
        <div className='table'>
        <h1>Computer</h1>
          <p>COM {computerPoint}| You {playerPoint}| Round#{props.player.rounds}</p>
            <Card val= {props.computer.cardArr[index]}/>
            <Card val ={props.player.cardArr[index]}/>
        <h1>You</h1>
        <button onClick={checkCard}>NEXT</button>
        </div>
  )
}
