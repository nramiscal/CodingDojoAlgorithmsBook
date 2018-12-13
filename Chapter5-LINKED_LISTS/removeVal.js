function Node(value){
    this.val = value;
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

    // remove the node with the given value
    // if value is not found, print that value was not found
    this.removeVal = function(value){

        // run through list to find value, stopping one before valNode
        // mark as beforeValNode
        // if beforeValNode does not exist, then value was never found
        // print that value was not found
        // otherwise set beforeValNode.next to point to .next.next
        // return this

        var runner = this.head;

        while(runner.next){
            if (runner.next.val == value){
                var beforeValNode = runner;
            }
            runner = runner.next;
        }

        if (!beforeValNode){
            console.log(`${value} was not found in list`);
        }
        else {
            beforeValNode.next = beforeValNode.next.next;
        }
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
sList.add(1).add(2).add(3).add(4).add(5);
sList.printAsArray();
sList.removeVal(50);
sList.printAsArray();
