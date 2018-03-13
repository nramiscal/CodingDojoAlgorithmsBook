function ArrStack(){
    var arr = [];

    // adds a value to our stack
    this.push = function(value){
        arr[arr.length] = value;
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
s.displayStack();
s.isEmpty();
s.push(1).push(2).push(3).push(4).push(5).displayStack();
s.isEmpty();
