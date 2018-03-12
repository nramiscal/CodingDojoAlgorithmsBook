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

    this.contains = function(num){
        runner = this.head;
        while (runner){
            if (runner.val == num){
                console.log(`Queue contains value ${num}.`);
                return this;
            }
            runner = runner.next;
        }
        console.log(`${num} is not in this queue.`)
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
q.enqueue(1).enqueue(2).enqueue(3).enqueue(4).displayQueue();
q.contains(1);
q.contains(4);
q.contains(100);
