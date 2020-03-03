import React, { Component } from "react";
import Deck from "../components/Deck/Deck";
import CardData from "./CardData.json";
import Cards from "./Cards.css";
class Game extends Component {
  state = {
    players: [],
    totalPrice: 4
  };
  shuffleDeck() {
    const shuffledDeck = [];
    let deck = CardData.CardSet;
    for (var i = 0; i <= 51; i++) {
      var place = Math.floor(Math.random() * deck.length);
      console.log(place);
      shuffledDeck.push(deck[place]);
      deck.slice(place, 1);
    }
    console.log(shuffledDeck);
  }
  render() {
    this.shuffleDeck();
    return (
      <div>
        <img className="Cards.Card" src="scards/1C.png" />
        <Deck />
        <div>{this.state.totalPrice}</div>
        <div>Add Player</div>
      </div>
    );
  }
}

export default Game;
