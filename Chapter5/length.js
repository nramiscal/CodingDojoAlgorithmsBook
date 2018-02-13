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

    this.length = function(){
        var runner = this.head;
        var length = 0;

        if (this.head == null){
            console.log(`Length is ${length}.`);
            return this;
        }
        else{
            while (runner){
                length++;
                runner = runner.next;
            }
            console.log(`Length is ${length}.`);
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
sList.length();
sList.add(1).add(2).add(3).add(4).add(5);
sList.printAsArray();
sList.length();
