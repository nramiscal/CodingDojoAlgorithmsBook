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

    // print whether given value is within the stack
    this.contains = function(value){
        for (let i = arr.length-1; i >= 0; i--){
            if (arr[i]===value){
                console.log(`The stack contains the value ${value}.`);
                return this;
            }
        }
        console.log(`The value ${value} is not in the stack.`);
        return this;
    }

    // print the number of stacked values
    this.size = function(){
        console.log(`The size of the stack is ${arr.length}`);
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
