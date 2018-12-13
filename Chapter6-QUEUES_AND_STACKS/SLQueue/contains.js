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
q.enqueue(1).enqueue(2).enqueue(3).enqueue(4).displayQueue();
console.log(q.contains(1)); // true
console.log(q.contains(4)); // true
console.log(q.contains(100)); // false
