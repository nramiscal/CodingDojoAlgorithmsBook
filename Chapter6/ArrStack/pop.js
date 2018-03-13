function ArrStack(){
    var arr = [];

    // adds a value to our stack
    this.push = function(value){
        arr[arr.length] = value;
        return this;
    }

    // print (not remove) the stack’s top value
    this.top = function(){
        if (arr.length < 1){
            console.log(`The stack is empty.`);
        }
        else {
            console.log(`The top of the stack is ${arr[arr.length-1]}`);
        }
        return this;
    }

    // print whether the stack is empty
    this.isEmpty = function(){
        if (arr.length < 1){
            console.log(`True. The stack is empty.`);
        }
        else {
            console.log(`False. The stack is not empty.`);
        }
    }

    // remove and print the top val
    this.pop = function(){
        console.log(`The value at the top of the stack was ${arr[arr.length-1]}`);
        arr.length--;
        return this;
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
s.push(1).push(2).push(3).push(4).push(5).displayStack();
s.pop().displayStack();
s.pop().displayStack();
