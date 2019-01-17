def rBin(arr, val):
    low = 0
    high = len(arr)-1

    def helper(low, high):
        mid = (low + high)//2
        print("low:", low, "high:", high, "mid:", mid, "current:", arr[mid], "val:", val)

        if low == high:
            if arr[mid] == val:
                return mid
            else:
                return -1
        else:
            if arr[mid] == val:
                return mid
            elif arr[mid] > val:
                return helper(low, mid-1)
            elif arr[mid] < val:
                return helper(mid+1, high)

    return helper(low, high)


print(rBin([1,2,3,4,5,6,7,8,9,10], 11))
