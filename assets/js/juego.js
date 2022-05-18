let deck = [];
const tipos = ['C', 'D', 'H', 'S']
const especiales = ['A', 'J', 'Q', 'K']

const crearDeck = () => {
    for (let i = 2; i <= 10; i++) {
        for (let tipo of tipos) {
            deck.push(i + tipo);
        }
    }

    for (let tipo of tipos) {
        for (let especial of especiales) {
            deck.push(especial + tipo);
        }
    }
    deck = _.shuffle(deck)
    console.log(deck);
    return deck;
}

crearDeck();

const pedirCarta = () => {
    if (deck.length == 0) {
        throw 'No hay cartas en el deck';
    }
    const card = deck.pop();
    console.log(deck);
    console.log(card);
    return card;
}

card = pedirCarta();

const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);
    return (isNaN(valor)) ? (valor === 'A') ? 11 : 10 : valor * 1;
}

valor = valorCarta(card);
console.log("valor: ", valor);