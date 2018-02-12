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

    // given value, split a list in two. the returned list should begin with
    // the node containing value
    this.splitOnValue = function(value){

        // traverse through list to find value
        // mark valNode and node just before (runner)
        // set runner.next to null to end list
        // create newSLL and point this.head to valNode
        // return newSLL

        var runner = this.head;
        var valNode;
        var newList = new SLL();

        while (runner.next){
            if (runner.next.val === value){
                valNode = runner.next;
                break;
            }
            runner = runner.next;
        }

        // truncate list at runner
        runner.next = null;

        // add rest of list to newList
        newList.head = valNode;
        return newList;

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
var sList2 = sList.splitOnValue(3);
sList.printAsArray();
sList2.printAsArray();
