function Node(value){
    this.val = value;
    this.next = null;

    this.removeSelf = function(sList){
        if (sList.head === null){
            return sList;
        }
        else if (sList.head === this){
            sList.head = sList.head.next;
            return sList;
        }
        else{
            var runner = sList.head;
            while (runner.next){
                if (runner.next === this){
                    break;
                }
                runner = runner.next;
            }

            runner.next = runner.next.next;
            return sList;
        }

    }
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

    this.addNode = function(node){
        if (!this.head) {this.head = node;}
        else {
            var runner = this.head;
            while (runner.next){
                runner = runner.next;
            }
            runner.next = node;
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
// sList.add(1).add(2)
var sNode = new Node(50);
sList.addNode(sNode).add(3).add(4).add(5);
sList.printAsArray(); // [ 1, 2, 50, 3, 4, 5 ]
sNode.removeSelf(sList);
sList.printAsArray(); // [ 1, 2, 3, 4, 5 ]
