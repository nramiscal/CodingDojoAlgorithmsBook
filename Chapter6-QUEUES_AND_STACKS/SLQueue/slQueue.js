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

    // return whether given value is found within our queue
    this.contains = function(value){
        runner = head;
        while (runner){
            if (runner.val == value){
                return true;
            }
            runner = runner.next;
        }
        return false;
    }

    // check if queue contains no values
    this.isEmpty = function(){
        if (!head){
            return true;
        } else {
            return false;
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
