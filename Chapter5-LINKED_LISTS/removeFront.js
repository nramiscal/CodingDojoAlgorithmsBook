function Node(val){
    this.val = val;
    this.next = null;
}

function SLL(){
    this.head = null;

    this.addFront = function(val){
        var oldHead = this.head;
        this.head = new Node(val);
        this.head.next = oldHead;
        return this;
    }

    this.removeFront = function(){
        if (this.head == null) {
            console.log("There is nothing to remove.");
            return this;
        }

        this.head = this.head.next;
        return this;
    }

    this.printAsArray = function(){
        var runner = this.head;
        var arr = [];
        while (runner){
            arr.push(runner.val);
            runner = runner.next;
        }
        console.log(arr);
        return this;
    }
}

var sList = new SLL();
sList.removeFront();
sList.addFront(3).addFront(2).addFront(1).addFront(0);
sList.printAsArray(); // [ 0, 1, 2, 3 ]
sList.removeFront();
sList.printAsArray();
