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

    // remove and return the top value
    this.pop = function(){
        if (!top){
            console.log(`Stack is empty. Nothing to pop.`);
            return;
        }
        else {
            var temp = top.val;
            console.log(`Removing ${temp} from the top`);
            top = top.next;
            return temp;
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
stack.pop();
stack.push(1).push(2).push(3).push(4).push(5).displayStack();
stack.pop();
stack.displayStack();
