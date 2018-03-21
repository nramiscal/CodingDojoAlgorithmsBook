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
            // console.log(`Removed ${temp} from front of queue`);
            return temp;
        }
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
            // console.log(`This queue is empty.`);
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

// Reorder SLQueue values to alternate first half values with second half values, in order. For example: (1,2,3,4,5) becomes (1,4,2,5,3). You may create one additional SLQueue, if needed.
function interleaveQueue(queue){
    var midpt = Math.ceil(queue.size()/2);
    var tempQueue = new SLQueue();
    for (var i = 1; i <= midpt; i++){
        tempQueue.enqueue(queue.dequeue());
    }
    // tempQueue.displayQueue();
    // queue.displayQueue();
    var length = tempQueue.size();
    for (var i = 1; i <= length; i++){
        tempQueue.enqueue(tempQueue.dequeue());
        if (i < length){
            tempQueue.enqueue(queue.dequeue());
        }
    }
    tempQueue.displayQueue();
}

var q = new SLQueue();
q.enqueue(1).enqueue(2).enqueue(3).enqueue(4).enqueue(5).displayQueue();
interleaveQueue(q);
