function ArrStack(){
    let arr = [];

    // adds a value to our stack
    this.push = function(value){
        arr[arr.length] = value;
        return this;
    }

    // print whether given value is within the stack
    this.contains = function(value){
        for (let i = arr.length-1; i >= 0; i--){
            if (arr[i]===value){
                return true;
            }
        }
        return false;
    }

    this.displayStack = function(){
        if (arr.length < 1){
            console.log(`The stack is empty.`);
        }
        for (let i = arr.length-1; i >=0; i--){
            console.log(arr[i]);
        }
        return this;
    }
}

var s = new ArrStack();
s.push(1).push(2).push(3).push(4).push(5).displayStack();
console.log(s.contains(1)); // true
console.log(s.contains(100)); // false
