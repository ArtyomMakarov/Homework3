function makeCounter() {
    var currenrCount = 1;

    return {
        getNext: function () {
            return currenrCount++;
        },

        setValue: function(value) {
            currenrCount = value;
        },

        reset: function () {
            currenrCount = 1;
        }
    };
}

var counter = makeCounter();

console.log(counter.getNext());
console.log(counter.getNext());
console.log(counter.getNext());
console.log(counter.setValue(5));
console.log(counter.getNext());
console.log(counter.getNext());
console.log(counter.reset());
console.log(counter.getNext());

