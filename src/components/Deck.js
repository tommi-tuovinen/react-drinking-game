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
        ];
        const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

        let cards = []
        for (let suit of suits) {
            for (let rank of ranks) {
                cards.push({ suit: suit.symbol, rank: rank, color: suit.color })
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