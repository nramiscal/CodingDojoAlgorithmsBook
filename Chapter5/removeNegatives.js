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

    this.removeNegatives = function(){

        while (this.head.val < 0){
            this.head = this.head.next;
        }

        var runner = this.head;

        while (runner.next){
            if (runner.next.val < 0){
                runner.next = runner.next.next;
            }
            else {
                runner = runner.next;
            }
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
sList.add(-1).add(-2).add(3).add(-4).add(-5).add(-6).add(7);
sList.printAsArray();
sList.removeNegatives();
sList.printAsArray();
