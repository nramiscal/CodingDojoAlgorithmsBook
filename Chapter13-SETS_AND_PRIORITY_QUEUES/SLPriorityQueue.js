function PriQNode(value, pri){
    this.val = value ;
    this.pri = pri;
    this.next = null ;
}

function PriQueue() {
    var head= null;
    var tail = null;

    // add the given value to end of our queue
    this.enqueue = function(value, pri){
        var newNode = new PriQNode(value, pri);

        if (!head){
            head = newNode;
            tail = newNode;
        }
        else if (head.pri > newNode.pri){
            newNode.next = head;
            head = newNode;
        }
        else {
            added = false;
            runner = head;
            while(runner.next){
                if (runner.next.pri <= newNode.pri){
                    runner = runner.next;
                }
                else {
                    newNode.next = runner.next;
                    runner.next = newNode;
                    added = true
                    break;
                }
            }
            if (!added){
                tail.next = newNode;
                tail = tail.next;
            }
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

    this.displayQueue = function(){
        if (!head){
            console.log(`This queue is empty.`);
        }
        else {
            var runner = head;
            var str = "";
            while(runner){
                str += `(${runner.val}, ${runner.pri}) ->`
                runner = runner.next;
            }
            str += " null";
            console.log(str);
        }
    }
}


pq = new PriQueue();
pq.enqueue("nina",4).displayQueue()
pq.enqueue("carlos",3).displayQueue()
pq.enqueue("ivan",2).displayQueue()
pq.enqueue("viktor",1).displayQueue()
pq.enqueue("abby",3).displayQueue()
pq.enqueue("bella",2).displayQueue()
