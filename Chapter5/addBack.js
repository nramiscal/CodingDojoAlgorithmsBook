function Node(val){
    this.val = val;
    this.next = null;
}

function SLL(){
    this.head = null;

    this.addBack = function(value) {
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
list.addBack(1).addBack(2).addBack(3).addBack(4)
list.printAsArray(); // [ 1, 2, 3, 4 ]
list.addBack(5);
list.printAsArray(); // [ 1, 2, 3, 4, 5 ]
