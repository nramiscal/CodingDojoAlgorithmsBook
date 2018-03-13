function Node(value){
    this.val = value ;
    this.next = null ;
}

function SLQueue() {
    var head= null;
    var tail = null;

    // add val to back of queue
    this.enqueue = function(value){
        var newNode = new Node(value);

        if (!this.head){
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            this.tail = this.tail.next;
        }
        return this;
    }


    // this function compares by reference - it checks to see if two lists refer to the same location in memory
    this.compareQueuesByReference = function(list){
        var runner1 = this.head;
        var runner2 = list.head;

        while(runner1 && runner2){
            if (runner1 !== runner2){
                console.log(`These are not the same list.`);
                return this;
            }
            runner1 = runner1.next;
            runner2 = runner2.next;
        }
        console.log(`These lists are one and the same.`);
        return this;
    }

    this.displayQueue = function(){
        if (!this.head){
            console.log(`This queue is empty.`);
        }
        else {
            var runner = this.head;
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
var q2 = new SLQueue();
var q3 = q;
q.enqueue(1).enqueue(2).enqueue(3).enqueue(4).displayQueue();
q2.enqueue(1).enqueue(2).enqueue(3).enqueue(4).displayQueue();
q3.displayQueue();
q.compareQueuesByReference(q2); // These are not the same list.
q.compareQueuesByReference(q3); // These lists are one and the same.
// since q and q3 are the same object, changing q3 changes q1...
q3.enqueue(5).displayQueue(); // 1 -> 2 -> 3 -> 4 -> 5 -> null
q.displayQueue(); // 1 -> 2 -> 3 -> 4 -> 5 -> null
