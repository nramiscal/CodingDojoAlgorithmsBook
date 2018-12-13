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

    this.front = function(){
        if (this.head == null){
            return null;
        }
        return this.head.val;
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
console.log(sList.front()); // null
sList.addFront(3).addFront(2).addFront(1);
console.log(sList.front()); // 1
