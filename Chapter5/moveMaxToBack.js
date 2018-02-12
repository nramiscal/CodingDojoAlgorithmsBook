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

        // traverse through list to find maxVal
        // when found, mark maxNode and beforeMaxNode
        // remove maxNode from list
        // runner is at end, add maxNode after runner
        // make maxNode end of list by setting .next to null

        var runner = this.head;
        var maxVal = this.head.val;
        var maxNode;
        var beforeMaxNode;

        while (runner.next){
            if (runner.next.val > maxVal){
                maxVal = runner.next.val;
                maxNode = runner.next;
                beforeMaxNode = runner;
            }
            runner = runner.next;
        }
        // runner is now at end of list

        // remove maxNode from list
        beforeMaxNode.next = maxNode.next;
        // add maxNode to end of list
        runner.next = maxNode;
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
