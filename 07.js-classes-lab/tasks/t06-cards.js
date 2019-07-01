// let result =
(function () {
    const Suits = {
        SPADES: '♠',
        HEARTS: '♥',
        DIAMONDS: '♦',
        CLUBS: '♣',
    };

    class Card {
        // static validFaces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

        constructor(face, suit) {
            this.face = face; //this.face is actually the setter
            this.suit = suit;
        }

        get face() {
            return this._face;
        }

        set face(face) {
            if (!["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"].includes(face)) {
                throw new Error('Invalid face!');
            }

            this._face = face;
        }

        get suit() {
            return this._suit;
        }

        set suit(suit) {
            if (!Object.values(Suits).includes(suit)) {
                throw new Error('Invalid suit!');
            }

            this._suit = suit;
        }
    }

    return {
        Suits,
        Card,
    }
})()

//
// let Card = result.Card;
// let Suits = result.Suits;
//
// let cardObj = new Card('Q', Suits.CLUBS);
// cardObj.face = 'A';
// cardObj.suit = Suits.DIAMONDS;
// console.log(cardObj.suit);

