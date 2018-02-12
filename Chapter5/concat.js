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

    // concat list to end of our sList, return sList
    this.concat = function(list){

        var runner = this.head;

        while (runner.next){
            runner = runner.next;
        }

        // runner is at last node, point it to beginning of list
        runner.next = list.head;
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
var sList2 = new SLL();
sList.add(1).add(2).add(3).add(4).add(5);
sList2.add(6).add(7).add(8).add(9).add(10);
sList.printAsArray();
sList2.printAsArray();
sList.concat(sList2);
sList.printAsArray();
