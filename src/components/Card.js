import React from 'react'
import './Card.sass'

class Card extends React.Component {
    render() {
        return (
            <div className="card">
                <div className={`card-values card-${this.props.color}`}>
                    <span className="card-rank">{this.props.rank}</span>  
                    <span className="card-suit">{this.props.suit}</span>
                </div>
                <div className="card-rule">{this.props.rule}</div>
            </div>
        )
    }
}

export default Card