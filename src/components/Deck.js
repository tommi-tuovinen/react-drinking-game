class Deck {
    constructor() {
        this.cards = this.initDeck()
        this.cards = this.shuffle(this.cards)
    }

    initDeck() {
        const suits = [
            { symbol: '♠', color: 'black' },
            { symbol: '♥', color: 'red' },
            { symbol: '♦', color: 'red' },
            { symbol: '♣', color: 'black' }
        ]
        const ranks = [
            { value: 'A', rule: 'Waterfall'},
            { value: '2', rule: 'You'},
            { value: '3', rule: 'Me'},
            { value: '4', rule: 'Hit the floor'},
            { value: '5', rule: 'Guys'},
            { value: '6', rule: 'Chicks'},
            { value: '7', rule: 'Heaven'},
            { value: '8', rule: 'Mate'},
            { value: '9', rule: 'Rhyme'},
            { value: '10', rule: 'Categories'},
            { value: 'J', rule: 'Never have I ever...'},
            { value: 'Q', rule: 'Questions'},
            { value: 'K', rule: 'King\'s Cup + New rule'}
        ]    

        let cards = []
        for (let suit of suits) {
            for (let rank of ranks) {
                cards.push({ suit: suit.symbol, rank: rank.value, color: suit.color, rule: rank.rule })
            }
        }
        return cards
    }

    drawCard() {
        return this.cards.pop()
    }

    // Shuffles array in place by using the modern version of the Fisher–Yates shuffle algorithm.
    // @param {Array} a items An array containing the items.
    shuffle(a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }
}

export default Deck