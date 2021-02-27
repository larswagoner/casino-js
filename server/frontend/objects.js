class Card {
    constructor(name) {
        // name = "c_12"
        this.name = name;
        this.suit = name[0];
        this.value = Number(name.split("_")[1]);
        this.builtValue = this.value;
        this.wasLastPlayed = false;
    }
}

class Player {
    constructor(name) {
        this.name = name
        this.hand = []
        this.discard = []
        this.cards = 0
        this.spades = 0
        this.aces = 0
        this.smallCasino = 0
        this.bigCasino = 0
        this.points = 0
    }

    count() {
        this.cards = this.discard.length()
        for (card of this.discard) {
            if (card.suit == 's' ) {
                this.spades += 1;
            }
            if (card.value == 1 ) {
                this.aces += 1;
            }
            if (card.suit == 's' && card.value == 2 ) {
                this.smallCasino = 1;
            }
            if (card.suit == 'd' && card.value == 10 ) {
                this.bigCasino = 2;
            }
        }
        
        this.points += (this.aces + this.smallCasino + this.bigCasino);
        
        return this.cards, this.spades
    }

    hand_to_discard(indexOne) {
        this.discard.append(this.hand.pop[indexOne])
    }

}

class Center {
    constructor() {
        this.pile = []
    }
    buildCards(indexOne, indexTwo, player) {
        temp = False
        newBuiltValue = (this.pile[indexOne].builtValue + this.pile[indexTwo].builtValue)
        for i in range(len(player.hand)):
            if newBuiltValue == player.hand[i].value:
                temp = True
                break

        if (this.pile[indexOne].isBuilt and this.pile[indexTwo].isBuilt and temp) {
            for i in range(len(this.pile[indexOne].pile)):
                this.pile[indexTwo].pile.append(this.pile[indexOne].pile.pop(0))

        
            this.pile[indexTwo].builtValue = newBuiltValue
            this.pile[indexTwo].collectValue = newBuiltValue
            this.pile.pop(indexOne)
        }
        else {
            console.log('Cannot Build Card.')
        }
            
    }

    collectCards(indexOne, indexTwo) {
        if(this.pile[indexOne].collectValue == this.pile[indexTwo].collectValue) {
            for(i in range(len(this.pile[indexOne].pile))) {
                this.pile[indexTwo].pile.append(this.pile[indexOne].pile.pop(0))
            }
            this.pile[indexTwo].isBuilt = False
            this.pile.pop(indexOne)
        }
        else {
            console.log("error in collectCards")
        }
    }



}
