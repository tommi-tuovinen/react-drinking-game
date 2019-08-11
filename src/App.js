import React from 'react'
import './App.sass'
import Card from './components/Card'
import Deck from './components/Deck'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currentCard: { color: 'black', suit: '-', rank: '-', rule: ''},
      deck: new Deck(),
    }
  }

  drawNewCard = () => {
    this.setState(function(state, props) {

      let card = this.state.deck.drawCard()

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
    return (
      <div className="App">
        <Card 
        color={this.state.currentCard.color} 
        suit={this.state.currentCard.suit} 
        rank={this.state.currentCard.rank} 
        rule={this.state.currentCard.rule}  />
        <button onClick={this.drawNewCard}>
          Draw new card
        </button>
      </div>
    )
  }
}

export default App
