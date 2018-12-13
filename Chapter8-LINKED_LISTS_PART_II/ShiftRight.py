# SList: Shift Right
#
# Given a list, shift nodes to the right, by a given number shiftBy . These shifts are circular: when shifting a node off list’s end, it reappears at list’s start. For list a=>b=>c, shift(1) should return c=>a=>b.
#
# Second: also handle negative shiftBy (to left).

'''
- find n = num % size()
- give runner1 a headstart by n nodes
- start runner2 at self.head
- move both until runner1 reaches end
- connect runner to self.head
- set runner2.next to None
- move self.head to runner
'''

class Node:
    def __init__(self, val):
        self.val = val
        self.next = None

class SLL:
    def __init__(self):
        self.head = None
        self.length = 0

    def add(self, val):
        newNode = Node(val)
        if not self.head:
            self.head = newNode
        else:
            runner = self.head
            while runner.next:
                runner = runner.next

            runner.next = newNode
        self.length += 1
        return self

    def size(self):
        return self.length

    def display(self):
        arr = []
        runner = self.head
        while runner:
            arr.append(runner.val)
            runner = runner.next

        print(arr)
        return self

    def shiftBy(self, num):
        n = num % self.size()
        if n == 0:
            return self
        else:
            runner = self.head
            while n > 0:
                runner = runner.next
                n -= 1
            runner2 = self.head
            while runner.next:
                runner = runner.next
                runner2 = runner2.next
            runner.next = self.head
            self.head = runner2.next
            runner2.next = None
            return self


s1 = SLL()
s1.add(10).add(9).add(8).add(7).add(6).add(5).add(4).add(3).add(2).add(1)
# s1.add('a').add('b').add('c')
s1.display()
s1.shiftBy(2)
s1.display()
