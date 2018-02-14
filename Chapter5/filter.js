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

    this.filter = function(lowVal, highVal){

        while (this.head.val < lowVal || this.head.val > highVal){
            this.head = this.head.next;
        }

        var runner = this.head;

        while (runner.next){
            if (runner.next.val < lowVal || runner.next.val > highVal){
                runner.next = runner.next.next;
            }
            else {
                runner = runner.next;
            }
        }

        return this;
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
sList.add(3).add(2).add(1).add(4).add(8).add(7).add(6).add(5).display();
sList.filter(3,6).display();
