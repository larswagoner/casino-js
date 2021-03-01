//---- modified native pop method -----
//pop() returns the first element and 
//pop() returns
Array.prototype.pop = function(index) {
    if (typeof index === 'undefined') {
        index = 0; //blame Guido Van Rossum
    } else {
        index = (((index % this.length) + this.length) % this.length);
    }
    result = this[index];
    this.splice(index, 1);
    return result;
}

//------ Array shuffle -------
Object.defineProperty(Array.prototype, 'shuffle', {
    value: function() {
        for (let i = this.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this[i], this[j]] = [this[j], this[i]];
        }
        return this;
    }
});

//------ Getting element from array -------
Object.defineProperty(Array.prototype, 'i', {
    value: function(index) {
        if (typeof index === 'undefined') {
            index = 0; //blame Guido Van Rossum
        } else {
            index = (((index % this.length) + this.length) % this.length);
        }
        result = this[index];
        return result;
    }
});
