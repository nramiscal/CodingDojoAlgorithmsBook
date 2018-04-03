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

    this.reverse = function(){
        var prev = null;
        var current = this.head;
        var follow = this.head.next;

        while(follow){
            current.next = prev;
            prev = current;
            current = follow;
            follow = follow.next;
        }
        current.next = prev; // to connect last node to previous node so we don't lose the entire list
        this.head.next = null;
        this.head = current;
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
sList.add(1).add(2).add(3).add(4).add(5).printAsArray();
sList.reverse().printAsArray();
