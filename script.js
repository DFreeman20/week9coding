/* War card game setup
deck of 52 cards with 4 suits
each card will have a rank (2 through Ace)
values to face cards and ace
Each player gets 26 cards and each card is only used once for 26 rounds
1 card from player1 and 1 from player2 see who has the higher card and gets a point
The player that wins the most rounds win

Player? Player1? Player2?
Name?
Score
Hand
*/

//Deck Class
// Array for cards
// Array for card values
// Array for suits

class Deck{
    constructor(){
        this.deck = [];
        this.values = [
            "Ace",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "Jack",
            "Queen",
            "King"
        ];
        this.suits = [
            "♧", "♢", "♡", "♤"
        ];
    }

    //Create deck...iterate over ranks/suits
    //push new card as an object into this.deck constructor

    createDeck(){
        for (let i = 0; i < this.suits.length; i++) {
            for (let j = 0; j < this.values.length; j++) {
                let card = {
                    name: `${this.values[j]}${this.suits[i]}`,
                    rank: j + 1
                }
                this.deck.push(card)
            }
        }
    }

    //method to shuffle deck

    shuffleDeck() {
        for (let i = this.deck.length - 1; i > 0; i--){
            //picks a random element from the index using i
            let j = Math.floor(Math.random() * (i + 1));
            //swaps the element at a random index until it iterates through
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
        }
    }

}

//Class for war game
/*
Needs: Deck
Create deck, shuffle, pass cards out
Logic to play game
    26 turns
    logic to decide who wins

2 Players need
    hand
    score
    name
*/

class Game{
    constructor() {
        this.player1 = {
            name: "Player1",
            score: 0,
            hand: []
        }
        this.player2 = {
            name: "Player2",
            score: 0,
            hand: []
        }
    }

    //method to play game
    /*
    pass out cards
    take 26 turns
    award point to winner
    log winner
    */
   playGame(){
    const deck = new Deck
    deck.createDeck()
    deck.shuffleDeck()

    //shift will remove the last item from the array
    //keeps iterating until deck length is 0
    //while loop deals cards to players
    while (deck.deck.length !== 0){
        this.player1.hand.push(deck.deck.shift())
        this.player2.hand.push(deck.deck.shift())
    }
    
    // play game
    for (let i = 0; i < this.player1.hand.length; i++){
        //how to award points
        //i refers to the first object and value is the value of the first card in the hand
        if (this.player1.hand[i].rank > this.player2.hand[i].rank){
            this.player1.score ++
            console.log(`
                Player1 Card: ${this.player1.hand[i].name}
                Player2 Card" ${this.player2.hand[i].name}
                Player 1 wins a point!
                Current Score: Player 1: ${this.player1.score}, Player 2: ${this.player2.score}`)
        } else if (this.player2.hand[i].rank > this.player1.hand[i].rank) {
            this.player2.score ++
            console.log(`
                Player1 Card: ${this.player1.hand[i].name}
                Player2 Card" ${this.player2.hand[i].name}
                Player 2 wins a point!
                Current Score: Player 1: ${this.player1.score}, Player 2: ${this.player2.score}`)
        } else {
            console.log(`
                Player1 Card: ${this.player1.hand[i].name}
                Player2 Card" ${this.player2.hand[i].name}
                Tie, no points awarded!
                Current Score: Player 1: ${this.player1.score}, Player 2: ${this.player2.score}`)
        }
    }

    if (this.player1.score > this.player2.score){
        console.log(`
            Final Score:
            Player 1: ${this.player1.score} Player 2: ${this.player2.score}
            Player 1 is the winner!`)
    } else if (this.player2.score > this.player1.score){
        console.log(`
            Final Score:
            Player 1: ${this.player1.score} Player 2: ${this.player2.score}
            Player 2 is the winner!`)
    } else if (this.player1.score = this.player2.score) {
        console.log(`
            Final Score:
            Player 1: ${this.player1.score} Player 2: ${this.player2.score}
            Tie Game!`)
    } else {
        console.log ("Something went wrong!")
    }
   }
}

const game = new Game
game.playGame()