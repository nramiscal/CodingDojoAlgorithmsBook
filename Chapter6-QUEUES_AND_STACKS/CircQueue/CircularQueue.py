'''
function CirQueue(cap){
    var head= 0 ;
    var tail = 0 ;
    var capacity = cap ;
    var arr= [] ;
}

CirQueue: Front
Return (not remove) the queue’s front value.

CirQueue: Is Empty
Return whether queue is empty.

CirQueue: Is Full
Return whether queue is full.

CirQueue: Size
Return number of queued vals (not capacity).

CirQueue: Enqueue
Create enqueue(val) that adds val to our CirQueue , or returns false . Wrap if needed!

CirQueue: Dequeue
Create CirQueue method dequeue() that removes/returns front value, or null on fail.

CirQueue: Contains
Return whether given val is within the queue.

CirQueue: Grow
Create method grow(newSize) that expands a CirQueue to a new given size.
'''

class CirQueue:
    def __init__(self, capacity):
        self._arr = []
        self.cap = capacity
        self.head = 0 # starting index, next value to dequeue
        self.size = 0
        print("Creating queue with capacity", self.cap)
        for i in range(capacity):
            self._arr.append(None)

    def front(self):
        if self.size == 0:
            print("The queue is empty")
            return
        else:
            print(f"Front of queue is {self._arr[self.head]}")
            return self._arr[self.head]

    def isEmpty(self):
        if self.size == 0:
            print("Queue is empty")
            return True
        else:
            print("Queue is not empty")
            return False

    def full(self):
        if self.size == self.cap:
            print("Queue is full")
            return True
        else:
            print("Queue is not full")
            return False

    def length(self):
        print("Length is", self.size)
        return self.size

    def enqueue(self, val):
        if self.size >= self.cap:
            print(f"Queue is full. Cannot enqueue {val}.")
            return self
        else:
            print("Adding value", val, "to index", (self.head+self.size) % self.cap)
            self._arr[(self.size+self.head) % self.cap] = val
            self.size += 1
            return self

    def dequeue(self):
        if self.size == 0:
            print("Queue is empty. Nothing to dequeue.")
            return
        else:
            temp = self._arr[self.head]
            self.head = (self.head + 1) % self.cap
            print("Dequeued", temp, "... Head is now at index", self.head)
            self.size -= 1
            return temp

    def contains(self, val):
        for i in range(self.size):
            if self._arr[(self.head + i) % self.cap] == val:
                print(f"Value {val} is in the queue")
                return True
        print(f"Value {val} is NOT in the queue")
        return False

    def displayArray(self):
        print(self._arr)

    def displayQueue(self):
        arr = []
        for i in range(self.size):
            arr.append(self._arr[(self.head + i) % self.cap])
        print(f"Queue is now: {arr}")

    def grow(self, newSize):
        if newSize < self.cap:
            print("Invalid size. Cannot shrink queue.")
        else:
            for i in range(newSize-self.cap):
                self._arr.append(None)
                for i in range(len(self._arr)-2, self.head-1, -1):
                    self._arr[i+1] = self._arr[i]
                self.cap += 1
                self.head = (self.head + 1) % self.cap


def multiDequeue(q,num):
    for i in range(num):
        q.dequeue()

q = CirQueue(10)
q.enqueue(11).enqueue(22).enqueue(33).enqueue(44).enqueue(55).enqueue(66).enqueue(77).enqueue(88).enqueue(99).enqueue(100).enqueue(110).displayQueue()
q.dequeue()
q.displayQueue()
q.enqueue(200).displayQueue()
multiDequeue(q,3)
q.displayQueue()
q.enqueue(300).enqueue(400).enqueue(500).enqueue(600).displayQueue()
multiDequeue(q,3)
q.displayQueue()
q.enqueue(700).enqueue(800).displayQueue()
multiDequeue(q,5)
q.displayQueue()
q.enqueue(900).enqueue(1000).enqueue(1).enqueue(2).enqueue(3).enqueue(4).enqueue(5).displayQueue()
print("*"*50)
q.front()
q.isEmpty()
q.full()
q.length()
q.contains(500)
q.contains(20000)
q.grow(5)
q.grow(12)
q.displayArray()
q.displayQueue()
q.enqueue(5).enqueue(6).enqueue(7).displayQueue()
