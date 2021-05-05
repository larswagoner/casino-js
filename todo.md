

### play
1. user puts down a card (player.hand -> center)
2. browser check based on number of times played `if counter < 1`
3. Web socket update of (player.hand, center)
4. reenter player's turn 

### build
1. user builds (center -> center)
2. browser check based on (player) and update
``` js
newBuiltValue = center.pile[indexOne].builtValue + center.pile[indexTwo].builtValue
if player.card[i].value == newBuiltValue and .isBuilt: #iterate throught the cards in hand, are piles isBuilt?
    for i in length(center.pile[indexTwo].pile):
        center.pile[indexTwo].pile.append(center.pile[indexOne].pile.pop(0))
    center.pile[indexTwo].builtValue = newBuiltValue
    center.pile.pop(indexOne)
```
3. WS update of (center)
4. reenter player's turn 


### collect 
1. user collects (center -> center)
2. browser check based on (center)
``` js
if center.pile[indexOne].builtValue == center.pile[indexTwo].builtValue:
    for i in length(center.pile[indexOne].pile):
        center.pile[indexTwo].pile.append(center.pile[indexOne].pile.pop(0))
    center.pile[indexTwo].isBuilt = false
    center.pile.pop(indexOne)
```
3. WS update of (center)
4. reenter player's turn


### take
1. user takes collect pile (center -> player.discard)
2. browser check based on (center)
``` js
for card in center.pile[indexCenterPile].pile
    if card.wasLastPlayed:
        temp = true
    if not center.pile[indexCenterPile].isBuilt and temp:
        while center.pile[indexCenterPile].pile:
            player.discard.append(center.pile[indexCenterPile].pile.pop(0))
        center.pile.pop(indexCenterPile)
```
3. WS update of (center, player.discard)



### WS update
* Server -> other players = (center)
* Active player -> Server (center, ActivePlayer.hand) or (center, ActivePlayer.discard)

### player
* hand
* discard
* isTurn 

# todo 
* add pop(index) to javascript (old/overwrites.js)
* discord addon?
* link repo from page
* ML bot

# React
* State: Components have states, we could use this for knowing whose turn it is, knowing the built value of a deck, knowing .isBuilt, etc. When modifying state it's important to re-render a component to update the state. See [State FAQ](https://reactjs.org/docs/faq-state.html).

# Screens
* Home Page: Only have "create game" button. To join a game you need a link. 



https://github.com/mizanxali/uno-online
https://www.pinturillo2.com/


# For 19th of may
* learn react state and useState()
* find a way to organize into classes
* learn "..." in JS
* research having more than 2 players

