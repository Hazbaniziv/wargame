import "./style.css";
import React from "react";

export default function ScorePage(props) {
  const showScore = () => {
    return (
      <h3 style={{ color: "lightblue" }}>
        loose: {props.player.losse} - win: {props.player.wins}
      </h3>
    );
  };
  const showWinLose = () => {
    if (props.player.lastGame == true)
      return <h2 style={{ color: "green" }}>WIN</h2>;
    else {
      return <h2 style={{ color: "red" }}>LOSSE</h2>;
    }
  };
  return (
    <div className='table'>
      <button onClick={() => {props.next(0)}}>X</button>
      {showWinLose()}
      {showScore()}
      <button onClick={() => {props.next(1)} }>AGAIN?</button>
    </div>
  );
}