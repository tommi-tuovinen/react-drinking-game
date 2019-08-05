import React from 'react'
import './App.sass'
import Card from './components/Card'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currentCard: {suit: '-', rank: '-'},
      deck: [
        {suit: 'Clubs', rank: '3'},
    ]
    }
  }

  drawNewCard = () => {
    this.setState(function(state, props) {
      return {
        currentCard: { 
          suit: state.deck[0].suit,
          rank: state.deck[0].rank
        }
      }
    })
  }

  render() {
    return (
      <div className="App">
        <Card suit={this.state.currentCard.suit} rank={this.state.currentCard.rank} />
        <button onClick={this.drawNewCard}>
          Draw new card
        </button>
      </div>
    )
  }
}

export default App
