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


// Given two Stack objects, create a standalone function to return whether they are equal. Stacks are equal only if they have equal elements in identical order. You can use an additional third Stack for storage; you will need it because you must return the given Stacks to their original condition upon exit.
function compareStacks(stack1,stack2){
    if (stack1.size() !== stack2.size()){
        return `These stacks are not the same.`;
    }
    else {
        var tempStack = new SLStack();
        var temp1;
        var temp2;
        var length = stack1.size();
        var flag = true;
        for (var i = 1; i <= length; i++){
            temp1 = stack1.pop();
            temp2 = stack2.pop();
            if (temp1 !== temp2){
                var flag = false;;
            }
            tempStack.push(temp1);
            tempStack.push(temp2);
        }
        for (var i = 1; i <= length; i++){
            stack2.push(tempStack.pop());
            stack1.push(tempStack.pop());
        }
        if (flag == false){
            return `These stacks are not the same.`;
        }
        else {
            return `These stacks are the same! :)`
        }
    }
}

var s1 = new SLStack();
var s2 = new SLStack();
s1.push(1).push(2).push(3).push(4).push(5);
s2.push(1).push(2).push(3).push(4).push(5);
console.log(compareStacks(s1,s2)); // These stacks are the same! :)
s1.push(6);
s2.push(60);
console.log(compareStacks(s1,s2)); // These stacks are not the same.
