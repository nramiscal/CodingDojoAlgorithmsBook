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

        // we will need two pointers: runner and minNode
        var runner = this.head;
        var minNode;

        // minVal is needed to determine minNode
        // initialize it to the value of the first node
        var minVal = this.head.val;


        // iterate through the entire list to find the minVal, and consequently the minNode
        while(runner.next){
            if (runner.val < minVal){
                minVal = runner.val;
                minNode = runner;
            }
            runner = runner.next;
        }

        // now we have a pointer to minNode so we can break any links surrounding it, as long as we do not move this pointer

        // reset runner to start at the beginning of the list
        runner = this.head;

        // traverse to the node just before minNode
        while (runner.next !== minNode){
            runner = runner.next;
        }

        // break the link to minNode and reattach link to the node after
        runner.next = runner.next.next;

        // add minNode before this.head
        minNode.next = this.head;

        // reset this.head to point to the new start of the list
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
