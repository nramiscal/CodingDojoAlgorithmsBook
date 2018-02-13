function Node(value){
    this.val = value;
    this.next = null;
}

function SLL(){
    this.head = null;

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
for (var i = 1; i <= 5; i++){
    var node = new Node(i);
    sList.addNode(node);
}
sList.printAsArray();
