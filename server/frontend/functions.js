// function createDeck(){
//     for (letter of ["c", "d", "h", "s"]) {
//         for(i = 1; i < 14; i++){
//             game.deck.push(new Card(letter + "_" + i));
//         }
//     }
// }




// Number.prototype.mod = function(n){

// }


//---- modified native pop method -----
//pop() returns the first element
Array.prototype.pop = function(index) {
    if (typeof index === 'undefined') {
        index = 0
    } else {
        index = (((index % this.length) + this.length) % this.length)
    }
    result = this[index]
    this.splice(index, 1);
    
    return result
}