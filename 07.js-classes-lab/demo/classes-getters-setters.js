class Card {
    validFaces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    constructor(face) {
        this.face = face; //this.face is actually the setter
    }

    get face() {
        return this._face;
    }

    set face(face) {
        if (!this.validFaces.includes(face)) {
            throw new Error('Invalid face!');
        }

        this._face = face;
    }
}

const card = new Card('5');

card.face = '10'; //setter is called
console.log(card.face); //getter is called