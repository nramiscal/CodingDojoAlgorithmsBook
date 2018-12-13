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
        if (!head){
            console.log(`Queue is empty. Nothing to dequeue.`);
            return;
        }
        else {
            var temp = head.val;
            head = head.next;
            console.log(`Removed ${temp} from front of queue`);
            return temp;
        }
    }

    // return the value at front of our queue, without removing it
    this.front = function(){
        if (!head){
            console.log(`Queue is empty. Nothing in front.`);
            return;
        }
        else {
            return head.val;
        }
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

var q = new SLQueue();
q.front();
q.enqueue(1).enqueue(2).enqueue(3).enqueue(4).displayQueue(); // 1 -> 2 -> 3 -> 4 -> null
console.log(q.front()); // 1
console.log(q.dequeue()); // 1
q.displayQueue(); // 2 -> 3 -> 4 -> null
console.log(q.front()); // 2
