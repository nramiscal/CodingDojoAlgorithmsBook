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

    this.back = function(){
        var runner = this.head;
        while(runner.next){
            runner = runner.next;
        }
        return runner.val;
    }
}


var list = new SLL();
list.add(1).add(2).add(3).add(4).add(5);
console.log(list.back()); // 5
