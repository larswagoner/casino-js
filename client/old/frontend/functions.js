function create_deck(){
    for (letter of ['c', 'd', 'h', 's']) {
        for(i = 1; i < 14; i++){
            game.deck.push(new Card(letter + '_' + i));
        }
    }
    game.deck.shuffle();
}



function deal_to_center(deck, numCards) {
    for (i = 0; i < numCards; i++) {
        center.pile.append(CenterPile());
        center.pile[-1].pile.append(deck.pop(0));
        center.pile[-1].builtValue = center.pile[-1].pile[0].builtValue;
    }
}

function deal_to_player(deck, player, numCards) {
    for (i = 0; i < numCards; i++) {
        player.hand.append(deck.pop(0));
    }
}

function deal_cards(deck, players) {
    if (deck) {
        if (deck.length == 52) {
            for (i = 0; i < 2; i++) {
                for (player of players) {
                    deal_to_player(deck, player, 2);
                }
            }
            deal_to_center(deck, 4);
        }
    } else {
        for (i = 0; i < 2; i++) {
            for (player of players) {
                deal_to_player(deck, player, 2)
            }
        }
    }
}

function move_to_center(player, indexCard) {
    center.pile.append(new CenterPile());
    center.pile[-1].pile.append(player.hand.pop(indexCard));
    center.pile[-1].builtValue += center.pile[-1].pile[0].builtValue;
    center.pile[-1].collectValue += center.pile[-1].pile[0].builtValue;
    center.pile[-1].pile[0].wasLastPlayed = True;
    center.pile[-1].pile[0].isBuilt = True;
}

function move_from_center(player, indexCenterPile) {
    lastPlayed = false;
    for (card of center.pile[indexCenterPile].pile) {
        if (card.wasLastPlayed) {
            lastPlayed = true;
            break;
        }
    }
    if (!center.pile[indexCenterPile].isBuilt && lastPlayed) {
        while (center.pile[indexCenterPile].pile) {
            player.discard.append(center.pile[indexCenterPile].pile.pop(0));
        }
        center.pile.pop(indexCenterPile);
    } else {
        print.no;
    }
}

// setup needs to be modified to fit new input of player names and such
function terminal_setup() { // before game is created, player chooses how many players
    create_deck();
    count = 0;
    print = new Print();
    numPlayers = prompt('Enter how many players: ');

    for (i = 0; i < numPlayers; i++) {
        playerName = prompt('Enter your name: ');
        game.players.append(new Player(playerName));
    } 
}

// function setup() ------ create this after figuring out user input

