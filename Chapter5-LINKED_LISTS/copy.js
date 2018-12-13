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

    this.copy = function(){
        var copy = new SLL();
        var runner = this.head;

        while (runner){
            var node = new Node(runner.val);
            copy.addNode(node);
            runner = runner.next;
        }

        return copy;

    }


    this.display = function(){
        var runner = this.head;
        var displayStr = "";
        while (runner){
            displayStr += runner.val + " -> ";
            runner = runner.next;
        }
        displayStr += "null";
        console.log(displayStr);
        return this;
    }
}

var sList = new SLL();
sList.add(1).add(2).add(3).add(4).add(5);
sList.display();
var sList2 = sList.copy();
sList2.display();
