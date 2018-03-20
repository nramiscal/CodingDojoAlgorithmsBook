function Node(value){
    this.val = value;
    this.next = null;
}

function SLStack(){

    this.head = null;

    // adds value to our stack
    this.push = function(value){
        var newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        return this;
    }

    // return whether a given value is within the stack
    this.contains = function(value){
        if (!this.head){
            console.log(`The stack is empty.`);
            return false;
        }
        else {
            var runner = this.head;
            while (runner){
                if (runner.val === value){
                    console.log(`Value ${value} is in the stack.`);
                    return true;
                }
                runner = runner.next;
            }
            console.log(`Value ${value} is not in the stack.`);
            return false;
        }
    }

    this.displayStack = function(){
        if (!this.head){
            console.log(`The stack is empty.`);
        }
        runner = this.head;
        while(runner){
            console.log(runner.val);
            runner = runner.next;
        }
        return this;
    }

}

var stack = new SLStack();
console.log(stack.contains(1)); // false
stack.push(1).push(2).push(3).push(4).push(5).displayStack();
console.log(stack.contains(1)); // true
console.log(stack.contains(5)); // true
console.log(stack.contains(100)); // false
