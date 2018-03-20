function ArrStack(){
    var arr = [];

    // adds a value to our stack
    this.push = function(value){
        arr[arr.length] = value;
        return this;
    }

    // return (not remove) the stack’s top value
    this.top = function(){
        return arr[arr.length-1];
    }

    this.displayStack = function(){
        if (arr.length < 1){
            console.log(`The stack is empty.`);
        }
        for (var i = arr.length-1; i >=0; i--){
            console.log(arr[i]);
        }
        return this;
    }
}

var s = new ArrStack();
console.log(s.top()); // undefined
s.push(1).push(2).push(3).push(4).push(5);
console.log(s.top()); // 5
