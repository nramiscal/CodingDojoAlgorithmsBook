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

    // insert a new node with val before the node containing before
    // or at the end if no node contains before
    this.prependVal = function(val, before){

        // run through the list to find before
        // when found, mark node as beforeNode
        // run through the list again stopping one before beforeNode
        // create newNode containing val
        // point runner.next to newNode
        // point newNode.next to beforeNode
        // return this

        var runner = this.head;
        var beforeNode;
        var newNode = new Node(val);

        while(runner.next){
            if (runner.val == before){
                beforeNode = runner;
            }
            runner = runner.next;
        }

        runner = this.head;
        while(runner.next !== beforeNode){
            runner = runner.next;
        }

        runner.next = newNode;
        newNode.next = beforeNode;
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
sList.prependVal(100,4);
sList.printAsArray();
