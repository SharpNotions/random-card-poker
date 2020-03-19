import React, { Component } from "react";
import Deck from "../components/Deck/Deck";
import CardData from "./CardData.json";
import styles from "./Game.module.css";
class Game extends Component {
  state = {
    players: [],
    totalPrice: 4
  };
  shuffleDeck() {
    let shuffledDeck = [];
    let deck = CardData.CardSet;
    for (var i = 0; i <= 51; i++) {
      var place = Math.floor(Math.random() * deck.length);
      shuffledDeck.push(deck[place]);
      deck.splice(place, 1);
      console.log(deck.length);
    }
    return shuffledDeck;
  }
  render() {
    const shuffledDeck = this.shuffleDeck();

    let transformedIngredients = Object.keys(shuffledDeck)
      .map(igKey => {
        return [...Array(shuffledDeck[igKey])].map((_, i) => {
          return (
            <img
              className={styles.Card}
              src={"scards/" + shuffledDeck[igKey].img}
            />
          );
        });
      })
      .reduce((arr, el) => {
        return arr.concat(el);
      }, []);
    if (transformedIngredients.length === 0) {
      transformedIngredients = <p>Please start adding ingredients!</p>;
    }
    return (
      <div>
        <Deck />
        {transformedIngredients}
        <div>{this.state.totalPrice}</div>
        <div>Add Player</div>
      </div>
    );
  }
}

export default Game;
