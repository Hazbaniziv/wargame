import { useState } from "react";
import HomePage from "./components/HomePage";
import GamePage from "./components/GamePage";
import ScorePage from "./components/ScorePage";

let player, computer,listOfPlayers=[];
function App() {
  const [page, setPage] = useState(0);


  const showPage = () => {
    if (page == 0) {
    return <HomePage start={initGame} pl={listOfPlayers} />;
    } else if (page == 1)
      return <GamePage player={player} computer={computer} next={setPage} />;
    else
      return  <ScorePage player={player} next={setPage}/> ;
  };

  const initGame = (name) => {
    let playerDeck =[], computerDeck=[];
    let deck = new CardDeck();
    for(let i=0; i<26;i++)
    {
      playerDeck.push(deck.dealCard())
      computerDeck.push(deck.dealCard())
    }
    player = new Player(name, playerDeck);
    listOfPlayers.push([player.name,player.wins,player.losse]);
    computer = new Player("computer", computerDeck);
    setPage(1);
  };

  return <div className="App">
    {showPage()}
    </div>;
}


class Player {
  wins = 0;
  losse = 0;
  rounds = 1;
  lastGame = false;

  constructor(name, cardArr) {
    this.name = name;
    this.cardArr = cardArr;
  }
}

class CardDeck {
  cards = [];
  constructor() {
    this.initCard();
  }
  initCard() {
    for (let i = 1; i <= 13; i++) {
      for (let j = 0; j < 4; j++) {
        this.cards.push(i);
      }
    }
  }
  dealCard() {
    let rand = Math.floor(Math.random() * this.cards.length);
    let card = this.cards.splice(rand, 1);
    return card[0];
  }
}
    export default App;