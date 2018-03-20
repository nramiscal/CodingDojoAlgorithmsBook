function Node(value){
    this.val = value;
    this.next = null;
}

function SLStack(){

    this.head = null;

    // adds a value to our stack
    this.push = function(value){
        var newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        return this;
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
stack.push(1).push(2).push(3).push(4).push(5);
stack.displayStack();
