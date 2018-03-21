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


// Create a standalone function to remove an SLQueue’s lowest value, otherwise
// leaving values in the same sequence. Use only local variables; allocate no other
// objects. Remove only the last minimum value. Convert [7,2,5,2,4] to [7,2,5,4]
function removeLastMinimum(queue){
    var min = queue.front();
    var length = queue.size();
    var temp;
    var idx;
    for (var i = 1; i <= length; i++){
        temp = queue.dequeue();
        if (temp <= min){
            min = temp;
            idx = i;
        }
        queue.enqueue(temp);
    }
    for (var i = 1; i <= length; i++){
        temp = queue.dequeue();
        if (idx !== i){
            queue.enqueue(temp);
        }
    }
    queue.displayQueue();
}

var q = new SLQueue();
q.enqueue(7).enqueue(2).enqueue(5).enqueue(2).enqueue(4).displayQueue();
// 7 -> 2 -> 5 -> 2 -> 4 -> null
removeLastMinimum(q); // 7 -> 2 -> 5 -> 4 -> null
