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
        var temp = top.val;
        // console.log(`Removing ${temp} from the top`);
        top = top.next;
        return temp;
    }

    // return the number of stacked values
    this.size = function(){
        var count = 0;
        var runner = top;
        while(runner){
            count++;
            runner = runner.next;
        }
        // console.log(`The size of the stack is:`);
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

function SLQueue() {
    var head= null;
    var tail = null;

    // add the given value to end of our queue
    this.enqueue = function(value){
        var newNode = new Node(value);

        if (!head){
            head = newNode;
            tail = newNode;
        }
        else {
            tail.next = newNode;
            tail = tail.next;
        }
        return this;
    }

    // remove and return value at front of queue
    this.dequeue = function(){
        var temp = head.val;
        head = head.next;
        // console.log(`Removed ${temp} from front of queue`);
        return temp;
    }

    // returns the number of values in our queue
    this.size = function(){
        var runner = head;
        var count = 0;
        while (runner){
            count++;
            runner = runner.next;
        }
        return count;
    }

    this.displayQueue = function(){
        if (!head){
            console.log(`This queue is empty.`);
        }
        else {
            var runner = head;
            var str = "";
            while(runner){
                str += runner.val + " -> ";
                runner = runner.next;
            }
            str += "null";
            console.log(str);
        }
    }
}

// Given a Stack, create a new second Stack and copy values from first Stack into second Stack, so they pop in same order. Use only one Queue for additional storage, and only public Stack/Queue interfaces.
function copyStack(stack){
    var copy = new SLStack();
    var queue = new SLQueue();
    var length = stack.size();
    var temp;
    // transfer stack to copy
    for (var i = 1; i <= length; i++){
        copy.push(stack.pop());
    }
    // transfer copy to stack AND queue
    // stack is returned to its original condition
    for (var i = 1; i <= length; i++){
        temp = copy.pop();
        stack.push(temp);
        queue.enqueue(temp);
    }
    // transfer queue to copy
    // copy is now a replica of stack, queue is empty
    for (var i = 1; i <= length; i++){
        copy.push(queue.dequeue());
    }
    stack.displayStack();
    console.log(`*****************`);
    copy.displayStack();
}


var s = new SLStack();
s.push(1).push(2).push(3).displayStack();
copyStack(s);
