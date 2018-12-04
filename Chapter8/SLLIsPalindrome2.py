# SList: Is Palindrome
#
# Return whether a list is a palindrome. String palindromes read the same front-to-back and back-to-front. Here, compare node values.

# Second: you may not have plentiful memory. Can you solve this without an additional array?


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

    def isPalindrome(self):
        if not self.head:
            print("list is empty")
            return
        else:
            length = 0
            runner = self.head
            while runner:
                length += 1
                runner = runner.next
            print("length", length)

            for i in range(length//2):
                print("i",i)

                counter = 0
                runner = self.head

                while counter < length -i-1:
                    runner = runner.next
                    counter += 1
                print("runner.val",runner.val)

                counter = 0
                walker = self.head

                while counter < i:
                    walker = walker.next
                    counter += 1
                print("walker.val",walker.val)

                if runner.val != walker.val:
                    return False

            return True



s1 = SLL()
# s1.add(10).add(9).add(8).add(7).add(6).add(5).add(4).add(3).add(2).add(1)
s1.add('t').add('a').add('c').add('o').add('o').add('c').add('a').add('t')
# s1.add('a').add('a').add('a').add('a').add('a').add('a').add('a')
print(s1.isPalindrome())
