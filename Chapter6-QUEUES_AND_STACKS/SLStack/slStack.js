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

    // return (not remove) the stack’s top value
    this.top = function(){
        if (!top){
            console.log(`The stack is empty.`);
            return;
        }
        else {
            console.log(`The value at the top of the stack is:`);
            return top.val;
        }
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

    // return whether a given value is within the stack
    this.contains = function(value){
        if (!top){
            console.log(`The stack is empty.`);
            return false;
        }
        else {
            var runner = top;
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
