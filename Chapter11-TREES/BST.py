class BSTNode:
    def __init__(self,value):
        self.val = value
        self.left = None
        self.right = None

    def size(self):
        if self.left and self.right:
            return 1 + self.left.size() + self.right.size()
        elif self.left:
            return 1 + self.left.size()
        elif self.right:
            return 1 + self.right.size()
        else:
            return 1

    def height(self):
        if self.left and self.right:
            return 1 + max(self.left.height(), self.right.height()) # 1 + the height of whichever side is taller
        elif self.left:
            return 1 + self.left.height()
        elif self.right:
            return 1 + self.right.height()
        else:
            return 1


class BST:
    def __init__(self):
        self.root = None
        self.size = 0

    def add(self, value):
        if self.root == None:
            self.root = BSTNode(value)
            self.size += 1
            print('ADDED', value, "to ROOT.")
        else:
            print('Need to add:', value)
            runner = self.root
            print("runner.val is", runner.val)
            while runner.left != None and runner.right != None:
                if value <= runner.val:
                    print("moved left")
                    runner = runner.left
                    print('runner.val is', runner.val)
                else:
                    print("moved right")
                    runner = runner.right
                    print('runner.val is', runner.val)

            if value < runner.val:
                runner.left = BSTNode(value)
                self.size += 1
                print('Added', value, "to runner.left")

            else:
                runner.right = BSTNode(value)
                self.size += 1
                print('Added', value, "to runner.right")

        return self

    def min(self):
        if self.root == None:
            print("Tree is empty.")
            return
        else:
            runner = self.root

            while runner.left != None:
                runner = runner.left

            return runner.val

    def max(self):
        if self.root == None:
            print("Tree is empty.")
            return
        else:
            runner = self.root

            while runner.right != None:
                runner = runner.right

            return runner.val

    def contains(self, value):
        if self.root == None:
            print("Tree is empty.")
            return
        # elif runner.val == value:
        #     return True
        else:
            runner = self.root
            # while runner.left != None and runner.right != None:
            while runner.left != None or runner.right != None:
                if runner.val == value:
                    return True
                elif value < runner.val:
                    print("moved left")
                    runner = runner.left
                    print('runner.val is', runner.val)
                    if runner.val == value:
                        return True
                elif value > runner.val:
                    print("moved right")
                    runner = runner.right
                    print('runner.val is', runner.val)
                    if runner.val == value:
                        return True
            return False

    def size(self):
        return self.size

    def getSizeRecursively(self): # wrapper function
        if self.root:
            return self.root.size() # uses the root node as the calling object
        else:
            return 0

    def getHeightRecursively(self): # wrapper function
        if self.root:
            return self.root.height() # uses the root node as the calling object
        else:
            return 0




# Stand-alone size function
def size(node):
    if node is None:
        return 0
    else:
        return (size(node.left) + 1 + size(node.right))


tree = BST()
tree.add(50).add(20).add(70).add(10).add(40).add(60).add(80)
print("Min is", tree.min())
print("Max is", tree.max())
print(tree.contains(100))
# print("Size of tree is", size(tree.root)) # works!
# print("Size of tree is", tree.size) # works!
print("Size of tree is", tree.getSizeRecursively())
print("Height of tree is", tree.getHeightRecursively())
