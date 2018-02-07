function Node(val){
    this.val = val;
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

    this.removeBack = function(){
        var runner = this.head;
        // traverse to the second to last node in list
        while(runner.next.next){
            runner = runner.next;
        }
        // make it the last node in the list
        runner.next = null;
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
list.add(1).add(2).add(3).add(4).add(5);
list.removeBack().printAsArray();
