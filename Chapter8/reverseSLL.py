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

    def reverse(self):
        if not self.head:
            return self
        else:

            prev = self.head
            curr = self.head.next
            next_node = self.head.next.next

            prev.next = None
            curr.next = prev

            while next_node.next:
                prev = curr
                curr = next_node
                next_node = next_node.next
                curr.next = prev

            next_node.next = curr
            self.head = next_node
            return self



s1 = SLL()
s1.add(10).add(9).add(8).add(7).add(6).add(5).add(4).add(3).add(2).add(1).display()
s1.reverse().display()
