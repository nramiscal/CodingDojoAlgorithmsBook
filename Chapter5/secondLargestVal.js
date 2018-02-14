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

    this.secondLargestVal = function(){

        if (!this.head){
            console.log(`The list is empty.`);
            return this;
        }
        else {
            var runner = this.head;
            var maxVal = this.head.val;
            var secondLargestVal;

            while (runner){
                if (runner.val > maxVal){
                    secondLargestVal = maxVal;
                    maxVal = runner.val;
                }
                runner = runner.next;
            }

            if (!secondLargestVal){
                console.log(`There is no secondLargestVal.`);
            }
            else {
                console.log(`secondLargestVal is ${secondLargestVal}`);
            }

            return this;

        }
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

var sList = new SLL()
sList.display();
sList.secondLargestVal();
sList.add(1).add(2).add(3).add(4).add(5).display().secondLargestVal();
var sList2 = new SLL();
sList2.add(2).add(2).add(2).add(2).add(2).display().secondLargestVal();
var sList3 = new SLL();
sList3.add(1).display().secondLargestVal();
