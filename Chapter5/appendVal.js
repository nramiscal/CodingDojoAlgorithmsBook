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

    // insert a new node with val after the node containing after
    // or at the end if no node contains after
    this.appendVal = function(val, after){

        // create newNode containing val
        // run through the list to find after
        // when found, mark node as afterNode
        // if afterNode was never set, then after was never found
        // runner is at end of list, so add newNode to the end using runner
        // otherwise, point newNode.next to afterNode.next
        // point afterNode.next to newNode
        // return this

        var runner = this.head;
        var newNode = new Node(val);

        while(runner.next){
            if (runner.val == after){
                var afterNode = runner;
            }
            runner = runner.next;
        }

        if (!afterNode){
            runner.next = newNode;
        }
        else {
            newNode.next = afterNode.next;
            afterNode.next = newNode;
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
sList.appendVal(100,2);
sList.printAsArray();
