class Node:
    def __init__(self, val):
        self.val = val
        self.next = None

class SLL:
    def __init__(self):
        self.head = None

    def add(self, val):
        newNode = Node(val)
        if not self.head:
            self.head = newNode
        else:
            runner = self.head
            while runner.next:
                runner = runner.next

            runner.next = newNode
        return self

    def display(self):
        arr = []
        runner = self.head
        while runner:
            arr.append(runner.val)
            runner = runner.next

        print(arr)
        return self


    def removeNegatives(self):

        while self.head != None and self.head.val < 0:
            if self.head.val < 0:
                self.head = self.head.next;

        if not self.head:
            return self
        else:
            runner = self.head

            while runner.next:
                if runner.next.val < 0:
                    runner.next = runner.next.next
                else:
                    runner = runner.next

            return self


li = SLL();
li.add(-7).add(-3).add(-1).add(-5).add(-6).add(-6).add(-2).add(-6).add(-6).display();
li.removeNegatives().display();
