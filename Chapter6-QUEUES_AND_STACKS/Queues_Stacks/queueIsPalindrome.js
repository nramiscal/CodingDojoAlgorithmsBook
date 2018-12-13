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


// Given a Queue , return true if its values are a palindrome (if they are same in
// reverse order), else return false . Restore Queue to original state before
// exiting. For storage, use one additional Stack .
function isPalindrome(queue){
    var stack = new SLStack();
    var q;
    var s;
    var flag = true;
    var length = queue.size();
    // loop through queue, copying to stack and returning to queue
    for (var i = 1; i <= length; i++){
        q = queue.dequeue();
        stack.push(q);
        queue.enqueue(q);
    }
    // loop through both, one letter at a time and compare each letter,
    // returning each letter to queue
    for (var i = 1; i <= length; i++){
        q = queue.dequeue();
        s = stack.pop();
        if (q !== s){
            flag = false;
        }
        queue.enqueue(q);
    }
    if (flag === false){
        console.log(`Not a palindrome.`);
    }
    else {
        console.log(`Is a palidrome.`);
    }
    // queue.displayQueue(); // check if in original condition
    return flag;
}

var q = new SLQueue();
var q2 = new SLQueue();
q.enqueue('t').enqueue('a').enqueue('c').enqueue('o').enqueue('c').enqueue('a').enqueue('t').displayQueue();
console.log(isPalindrome(q)); // Is a palindrome. true
q2.enqueue('t').enqueue('a').enqueue('c').enqueue('o').enqueue('c').enqueue('a').enqueue('t').enqueue('s').displayQueue();
console.log(isPalindrome(q2)); // Not a palindrome. false
