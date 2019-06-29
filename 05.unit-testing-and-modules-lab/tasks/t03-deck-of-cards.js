function deckOfCards(arrayOfCardStrings) {
    function playingCards(face, suit) {
        const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

        const suits = {
            S: '\u2660 ',
            H: '\u2665',
            D: '\u2666',
            C: '\u2663',
        };

        const error = Error();
        error.cause = 'Invalid card: ' + face + suit;

        if (!validFaces.includes(face)) {
            error.message = 'Invalid face!';
            throw error;
        }

        if (!Object.keys(suits).includes(suit)) {
            error.message = 'Invalid suit!';
            throw error;
        }

        return {
            face,
            suit,
            toString: () => '' + face + suits[suit],
        }
    }

    const processCardInput = cardInput => {
        const face = cardInput.substring(0, cardInput.length - 1);
        const suit = cardInput[cardInput.length - 1];

        return [face, suit];
    };

    let output = '';
    try {
        const arrayOfPlayingCards = arrayOfCardStrings.map(cardString => {
            const cardTokens = processCardInput(cardString);
            return playingCards(cardTokens[0], cardTokens[1]).toString();
        });

        console.log(arrayOfPlayingCards.join(' '));
    } catch (e) {
        console.log(e.cause);
    }
}

// deckOfCards(['5S', '3D', 'QD', '1C']);