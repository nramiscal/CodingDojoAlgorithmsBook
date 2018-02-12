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

        // create newNode containing val
        // run through the list to find before
        // when found, mark beforeNode and justBeforeNode
        // if beforeNode was never set, then before was never found
        // runner is at end of list, so add newNode to the end using runner
        // otherwise, point justBeforeNode.next to newNode
        // point newNode.next to beforeNode
        // return this

        var runner = this.head;
        var newNode = new Node(val);

        while(runner.next){
            if (runner.next.val == before){
                var beforeNode = runner.next;
                var justBeforeNode = runner;
            }
            runner = runner.next;
        }

        if (!beforeNode){
            runner.next = newNode;
            return this;
        }
        else {
            justBeforeNode.next = newNode;
            newNode.next = beforeNode;
            return this;
        }
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
sList.prependVal(100,3);
sList.printAsArray();
