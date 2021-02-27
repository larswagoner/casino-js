//---- modified native pop method -----
//pop() returns the first element and 
//pop() returns
Array.prototype.pop = function(index) {
    if (typeof index === 'undefined') {
        index = 0 //blame Guido Van Rossum
    } else {
        index = (((index % this.length) + this.length) % this.length)
    }
    result = this[index]
    this.splice(index, 1);
    
    return result
}

