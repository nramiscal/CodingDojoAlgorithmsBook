function Node(val){
    this.val = val;
    this.next = null;
}

// var nody = new Node(5);
// console.log(nody.val); // 5
// console.log(nody.next); // null

function SLL(){
    this.head = null;

    this.addFront = function(val){
        var oldHead = this.head;
        this.head = new Node(val);
        this.head.next = oldHead;
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
sList.addFront(3).addFront(2).addFront(1);
console.log(sList);
// SLL {
// head: Node { val: 1, next: Node { val: 2, next: [Object] } },
// addFront: [Function],
// printAsArray: [Function] }
sList.printAsArray(); // [ 1, 2, 3 ]
