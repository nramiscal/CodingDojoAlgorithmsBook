function Node(value){
    this.val = value;
    this.next = null;
}

function SLStack(){

    var top = null;

    // adds a value to our stack
    this.push = function(value){
        var newNode = new Node(value);
        newNode.next = top;
        top = newNode;
        return this;
    }

    // return whether the stack is empty
    this.isEmpty = function(){
        if (!top){
            return true;
        }
        else {
            return false;
        }
    }

    this.displayStack = function(){
        if (!top){
            console.log(`The stack is empty.`);
        }
        runner = top;
        while(runner){
            console.log(runner.val);
            runner = runner.next;
        }
        return this;
    }

}

var stack = new SLStack();
console.log(stack.isEmpty()); // true
stack.push(1).push(2).push(3).push(4).push(5);
console.log(stack.isEmpty()); // false
