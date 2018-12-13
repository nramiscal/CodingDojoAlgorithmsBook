# SList: Kth-Last Node
#
# Given k, return the value that is ‘k’ nodes from the list’s end. If given (list,1) , return the list’s last value. If given (list,4) , return the value at the node that has exactly 3 nodes following it.

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

    def kThLastNode(self, k):
        if not self.head:
            print("list is empty")
            return
        else:
            counter = 0
            runner = self.head

            while counter < k-1 and runner.next:
                runner = runner.next
                counter += 1

            if counter < k-1:
                print("list is not long enough")
                return
            else:
                walker = self.head

                while runner.next:
                    walker = walker.next
                    runner = runner.next

                return walker.val

s1 = SLL()
s1.add(10).add(9).add(8).add(7).add(6).add(5).add(4).add(3).add(2).add(1).display()
print(s1.kThLastNode(4))
