function Node(val){
    this.val = val;
    this.next = null;
}

function SLL(){
    this.head = null;

    this.add = function(value) {
        var newNode = new Node(value);
        if(!this.head) {this.head = newNode;}
        else {
            var runner = this.head;
            while (runner.next){
                runner = runner.next;
            }
            runner.next = newNode;
        }
        return this;
    }

    this.moveMinToFront = function(){

        var runner = this.head;
        var minVal = this.head.val;
        var minNode;
        var beforeMinNode;

        // find node with minVal and node just before
        while(runner.next){
            if (runner.next.val < minVal){
                minVal = runner.next.val;
                beforeMinNode = runner;
                minNode = runner.next;
            }
            runner = runner.next;
        }

        // remove minNode from list
        beforeMinNode.next = minNode.next;
        // add minNode to beginning of list
        minNode.next = this.head;
        // reset head to reflect new start of list
        this.head = minNode;
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

var list = new SLL();
list.add(4).add(3).add(7).add(1).add(5)
list.printAsArray(); // [ 4, 3, 7, 1, 5 ]
list.moveMinToFront();
list.printAsArray(); // [ 1, 4, 3, 7, 5 ]
