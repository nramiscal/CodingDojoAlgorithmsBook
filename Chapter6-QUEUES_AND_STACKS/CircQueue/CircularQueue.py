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
    def __init__(self, cap):
        self._arr = []
        self.cap = cap
        self.headIdx = None
        self.tailIdx = None

    def front(self):
        if len(self._arr) == 0:
            return
        else:
            return self._arr[0]

    def isEmpty(self):
        if len(self._arr) == 0:
            return True
        else:
            return False

    def isFull(self):
        if len(self._arr) == self.cap:
            return True
        else:
            return False

    def size(self):
        if len(self._arr) == 0:
            return 0
        else:
            return self.tailIdx - self.headIdx

    def enqueue(self, val):
        if len(self._arr) == 0:
            self._arr.append(val)
            print("Added", val)
            self.headIdx = 0
            self.tailIdx = 1
            return self
        else:
            if self.tailIdx == self.cap:
                print(f"Queue is full. Cannot enqueue {val}.")
                return self
            else:
                self._arr.append(val)
                print("Added", val)
                self.tailIdx += 1
                return self

    def dequeue(self):
        if len(self._arr) == 0:
            print("Queue is empty. Nothing to dequeue.")
            return False
        else:
            temp = self._arr[0]
            for i in range(len(self._arr)-1):
                self._arr[i] = self._arr[i+1]
            self._arr.pop()
            self.tailIdx -= 1
            print(f"Dequeued {temp}")
            return temp

    def contains(self, val):
        if val in self._arr:
            return True
        else:
            return False

    def display(self):
        print(self._arr)

    def grow(self, newSize):
        if newSize < self.cap:
            print("Invalid size.")
        else:
            self.cap = newSize




q = CirQueue(5)
q.enqueue(1).enqueue(2).enqueue(3).enqueue(4).enqueue(5).enqueue(6).enqueue(7)
q.dequeue()
q.dequeue()
q.dequeue()
q.display()
q.enqueue(101).enqueue(102).enqueue(103).display()
q.dequeue()
q.dequeue()
q.enqueue(104).enqueue(105).display()
print(q.contains(100))
q.grow(7)
q.enqueue(106).enqueue(107).enqueue(108).display()
