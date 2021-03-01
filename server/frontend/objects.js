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
        for(i in player.hand.length){
            if (newBuiltValue == player.hand[i].value){
                temp = True
                break
            }
        }

        if (this.pile[indexOne].isBuilt && this.pile[indexTwo].isBuilt && temp) {
            for (i in this.pile[indexOne].pile.length) {
                this.pile[indexTwo].pile.append(this.pile[indexOne].pile.pop(0))
            }
            this.pile[indexTwo].builtValue = newBuiltValue
            this.pile[indexTwo].collectValue = newBuiltValue
            this.pile.pop(indexOne)
        }
        else {
            console.log('Cannot Build Card.')
        }
    }

    collectCards(indexOne, indexTwo) {
        if (this.pile[indexOne].collectValue == this.pile[indexTwo].collectValue) {
            for (i in this.pile[indexOne].pile) {
                this.pile[indexTwo].pile.append(this.pile[indexOne].pile.shift())
            }
            this.pile[indexTwo].isBuilt = false
            this.pile.pop(indexOne)
        }
        else {
            console.log("error in collectCards")
        }
    }



}

class CenterPile {
    constructor() {
        this.pile = [] 
        this.builtValue = 0 
        this.collectValue = this.builtValue
        this.isBuilt = True
    }
}

class Print {
    constructor() {
        this.errorStr = "there was an error";
        this.error2Str = "you typed an invalid command or just play the card";
        this.error3str = "you can't do that";
        this.error4Str = "you can't play multiple times";
        this.noStr = "NEIN";
    }

    error(name){
        console.log(name + ", " + this.errorStr);
    }
    error2(name){
        console.log(name + ", " + this.error2Str);
    }
    error3(name){
        console.log(name + ", " + this.error3Str);
    }
    error4(name){
        console.log(name + ", " + this.error4Str);
    }
    no(){
        console.log(this.noStr);
    }
}

