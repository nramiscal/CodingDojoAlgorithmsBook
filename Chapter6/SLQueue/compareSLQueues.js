function Node(value){
    this.val = value ;
    this.next = null ;
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
        return this;
    }
}

// Given two SLQueue objects, create a standalone function that returns whether they are equal. Queues are equal only if they have equal elements in identical order. Allocate no other object, and return the queues in their original condition upon exit.
function compareSLQueues(queue1, queue2){
    if (queue1.size() !== queue2.size()){
        return `These queues are not the same.`;
    }
    var temp1;
    var temp2;
    for (var i = 1; i <= queue1.size(); i++){
        // console.log(queue1.front());
        // console.log(queue2.front());
        temp1 = queue1.dequeue();
        temp2 = queue2.dequeue();
        if (temp1 !== temp2){
            return `These queues are not the same.`;
        }
        queue1.enqueue(temp1);
        queue2.enqueue(temp2);
    }
    return `These queues are the same! :)`
}

var q1 = new SLQueue();
var q2 = new SLQueue();
q1.enqueue(1).enqueue(2).enqueue(3).enqueue(4).displayQueue();
console.log(compareSLQueues(q1,q2)); // These queues are not the same.
q2.enqueue(1).enqueue(2).enqueue(3).enqueue(4).displayQueue();
console.log(compareSLQueues(q1,q2)); // These queues are the same! :)
q2.enqueue(5).displayQueue();
console.log(compareSLQueues(q1,q2)); // These queues are not the same.
