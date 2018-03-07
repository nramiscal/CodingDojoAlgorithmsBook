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

    this.zipSLists = function(list){

        var runner1 = this.head;
        var nextNode = this.head.next;
        var runner2 = list.head;

        while(runner1.next && runner2.next){
            runner1.next = runner2;
            runner2 = runner2.next;
            runner1.next.next = nextNode;
            runner1 = nextNode;
            nextNode = nextNode.next;
        }

        // console.log(`runner1.val is ${runner1.val}`);
        // console.log(`runner2.val is ${runner2.val}`);
        // console.log(`nextNode is ${nextNode}`);
        // console.log(`runner1.next is ${runner1.next}`);
        // console.log(`runner2.next is ${runner2.next}`);

        if (!runner1.next){
            runner1.next = runner2;
        }
        if (!runner2.next){
            runner1.next = runner2;
            runner2.next = nextNode;
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

var sList1 = new SLL();
var sList2 = new SLL();
sList1.add(1).add(2).add(3).add(4).add(5).display();
sList2.add('a').add('b').add('c').display();

sList1.zipSLists(sList2).display();
// sList2.zipSLists(sList1).display();
