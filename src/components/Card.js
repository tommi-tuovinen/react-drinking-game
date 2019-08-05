import React from 'react'
import './Card.sass'

class Card extends React.Component {
    render() {
        return (
            <div className="card">
                <p>{this.props.suit} {this.props.rank}</p>
        </div>
        )
    }
}

export default Card