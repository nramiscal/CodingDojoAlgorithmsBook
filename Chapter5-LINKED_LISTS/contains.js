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

    this.contains = function(data) {
        if (this.head == null) {
            return false;
        }
        runner = this.head;
        while (runner) {
            if (runner.val == data) {
                return true;
            }
            runner = runner.next;
        }
        return false;
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
sList.printAsArray(); // []
console.log(sList.contains(0)); // false
sList.addFront(3).addFront(2).addFront(1).addFront(0);
sList.printAsArray(); // [ 0, 1, 2, 3 ]
console.log(sList.contains(3)); // true
console.log(sList.contains(4)); // false
