import React from 'react'
import './App.sass'
import Card from './components/Card'
import Deck from './components/Deck'

class App extends React.Component {
  constructor() {
    super()
    this.state = this.initialState()
  }

  initialState() {
    return {
      currentCard: { color: 'black', suit: '', rank: '', rule: '?'},
      deck: new Deck()
    }
  }

  restartGame = () => {
    this.setState(this.initialState());
  }

  drawNewCard = () => {
    let card = this.state.deck.drawCard()

    if (card == null) { return }

    this.setState(function(state, props) {
      return {
        currentCard: { 
          color: card.color,
          suit: card.suit,
          rank: card.rank,
          rule: card.rule
        }
      }
    })
  }

  render() {

    let actionButton

    if (this.state.deck.cardsLeft()) {
      actionButton = <button className="button-draw" onClick={this.drawNewCard}>
        DRAW
    </button>
    } else {
      actionButton = <button className="button-suffle" onClick={this.restartGame}>
        SUFFLE DECK
    </button>
    }

    return (
      <div className="app">
        {this.state.currentCard != null &&
        <Card 
        color={this.state.currentCard.color} 
        suit={this.state.currentCard.suit} 
        rank={this.state.currentCard.rank} 
        rule={this.state.currentCard.rule}  />
        }
        {actionButton}
      </div>
    )
  }
}

export default App
