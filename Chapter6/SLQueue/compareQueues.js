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


    // this function checks to see if two lists contain the same values and sequence of values - it does not compare by reference.
    this.compareQueues = function(list){
        var runner1 = this.head;
        var runner2 = list.head;

        while(runner1 && runner2){
            if (runner1.val !== runner2.val){
                console.log(`These lists are not the same.`);
                return this;
            }
            runner1 = runner1.next;
            runner2 = runner2.next;
        }
        if (runner1 || runner2){
            console.log(`These lists are not the same.`);
            return this;
        }

        console.log(`These lists are the same.`);
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
q.enqueue(1).enqueue(2).enqueue(3).enqueue(4).displayQueue();
q2.enqueue(1).enqueue(2).enqueue(3).enqueue(4).displayQueue();
q.compareQueues(q2); // same
q2.enqueue(5).displayQueue();
q.compareQueues(q2); // not the same
q.enqueue(5).displayQueue();
q.compareQueues(q2); // same
