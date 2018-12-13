# SList: Is Palindrome
#
# Return whether a list is a palindrome. String palindromes read the same front-to-back and back-to-front. Here, compare node values.


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
            str = ""
            runner = self.head
            while runner:
                str += runner.val
                runner = runner.next

            # print(str)
            # test if str is Palindrome
            left = 0
            right = len(str)-1

            while left < right:
                if str[left] != str[right]:
                    return False
                left += 1
                right -= 1
            return True


s1 = SLL()
s1.add('t').add('a').add('c').add('o').add('c').add('a').add('t')
# s1.display()
print(s1.isPalindrome())
