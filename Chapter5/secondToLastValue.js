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

    this.secondToLastValue = function(){
        var runner = this.head;

        if (!this.head || !this.head.next){
            console.log(`The list is not long enough to perform this operation.`);
            return this;
        }

        while (runner.next.next){
            runner = runner.next;
        }

        console.log(`The second to last value is ${runner.val}`);
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
sList.add(1); // "The list is not long enough to perform this operation."
sList.secondToLastValue();
sList.add(2).add(3).add(4).add(5);  // "The second to last value is 4"
sList.secondToLastValue();
sList2.secondToLastValue(); // "The list is not long enough to perform this operation."
