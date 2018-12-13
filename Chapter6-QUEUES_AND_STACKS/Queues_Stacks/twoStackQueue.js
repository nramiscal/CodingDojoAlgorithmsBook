function ArrStack(){
    var arr = [];

    // add a value to our stack
    this.push = function(value){
        arr[arr.length] = value;
        return this;
    }

    // remove and return the top value
    this.pop = function(){
        var temp = arr[arr.length-1];
        arr.length--;
        return temp;
    }

    // return the number of stacked values
    this.size = function(){
        return arr.length;
    }

}

function twoStackQueue(){
    var stack1 = new ArrStack();
    var stack2 = new ArrStack();

     this.enqueue = function(value){
         console.log(`Enqueue value ${value}.`);
         stack1.push(value);
         return this;
     }

     this.dequeue = function(){
         if (stack1.size() == 0){
             return `The queue is empty. Nothing to dequeue.`;
         }
         else {
             for (var i = stack1.size()-1; i >= 0; i--){
                 stack2.push(stack1.pop());
             }
             var temp = stack2.pop();
             for (var i = stack2.size()-1; i >= 0; i--){
                 stack1.push(stack2.pop());
             }
             console.log(`Dequeued value:`);
             return temp;
         }
     }
}

var q = new twoStackQueue();
q.enqueue(1).enqueue(2).enqueue(3);
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
