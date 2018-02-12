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

    this.moveMaxToBack = function(){

        // we will need three pointers: runner and maxNode
        var runner = this.head;
        var maxNode;
        var lastNode;

        // maxVal is needed to determine maxNode
        // initialize it to the value of the first node
        var maxVal = this.head.val;


        // iterate through the entire list to find the maxVal, and consequently the maxNode
        while(runner.next){
            if (runner.val > maxVal){
                maxVal = runner.val;
                maxNode = runner;
            }
            runner = runner.next;
        }

        // now we have a pointer to maxNode so we can break any links surrounding it, as long as we do not move this pointer

        // runner is at end of list. mark this node as lastNode
        lastNode = runner;

        // reset runner to start at the beginning of the list
        runner = this.head;

        // traverse to the node just before maxNode
        while (runner.next !== maxNode){
            runner = runner.next;
        }

        // break the link to maxNode and reattach link to the node after
        runner.next = runner.next.next;

        // add maxNode to the end of the list
        lastNode.next = maxNode;

        // reset maxNode's this.next to reflect its new status as end of list
        maxNode.next = null;
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
list.moveMaxToBack();
list.printAsArray(); // [ 1, 4, 3, 7, 5 ]
