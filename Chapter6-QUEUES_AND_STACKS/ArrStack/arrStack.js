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

    // return whether the stack is empty
    this.isEmpty = function(){
        if (arr.length < 1){
            return true;
        }
        else {
            return false;
        }
    }

    // remove and print the top val
    this.pop = function(){
        if (arr.length < 1){
            console.log(`The stack is empty. Nothing to pop.`);
            return;
        }
        var temp = arr[arr.length-1];
        arr.length--;
        console.log(`Removed value from top:`);
        return temp;
    }

    // print whether given value is within the stack
    this.contains = function(value){
        for (let i = arr.length-1; i >= 0; i--){
            if (arr[i]===value){
                console.log(`The stack contains the value ${value}.`);
                return true;
            }
        }
        console.log(`The value ${value} is not in the stack.`);
        return false;
    }

    // print the number of stacked values
    this.size = function(){
        console.log(`The size of the stack is:`);
        return arr.length;
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
