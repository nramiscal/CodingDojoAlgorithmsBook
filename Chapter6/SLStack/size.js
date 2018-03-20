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

    // return the number of stacked values
    this.size = function(){
        var count = 0;
        var runner = top;
        while(runner){
            count++;
            runner = runner.next;
        }
        console.log(`The size of the stack is:`);
        return count;
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
console.log(stack.size());
stack.push(1).push(2).push(3).push(4).push(5);
console.log(stack.size());
