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

    // remove and return the top value
    this.pop = function(){
        var temp = this.head.val;
        console.log(`Removing ${temp} from the top`);
        this.head = this.head.next;
        return temp;
    }

    // return (not remove) the stack’s top value
    this.top = function(){
        if (!this.head){
            console.log(`The stack is empty.`);
            return;
        }
        else {
            console.log(`The value at the top of the stack is:`);
            return this.head.val;
        }
    }

    // return whether the stack is empty
    this.isEmpty = function(){
        if (!this.head){
            return true;
        }
        else {
            return false;
        }
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

    // return the number of stacked values
    this.size = function(){
        var count = 0;
        var runner = this.head;
        while(runner){
            count++;
            runner = runner.next;
        }
        console.log(`The size of the stack is:`);
        return count;
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
