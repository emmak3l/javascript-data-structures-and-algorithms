# Unique Number of Occurences

# Given an array of integers arr, return true if the number of occurrences of each value
# in the array is unique or false otherwise.

 
# Example 1:
# Input: arr = [1,2,2,1,1,3]
# Output: true
# Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. 
# No two values have the same number of occurrences.

# Example 2:
# Input: arr = [1,2]
# Output: false

# Example 3:
# Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
# Output: true
 

# Constraints:

# 1 <= arr.length <= 1000
# -1000 <= arr[i] <= 1000

# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

# April 22nd, 2024
# First Attempt
# Used a frequency counter approach with a set comparison to solve this problem, first attempt was accepted!
# This solution has a decent runtime and great memory usage compared to other python sumbissions
# Runtime: 42ms (Beats 57.36% of users with Python3)
# Memory: 16.67MB (Beats 78.75% of users with Python3)

class Solution:
    def uniqueOccurrences(self, arr: list[int]) -> bool:
    	counter = {}
    	for val in arr:
    		counter[val] = counter.get(val, 0) + 1

    	count = set(counter.values())

    	if len(count) != len(counter):
    		return False

    	return True

sol = Solution()

print(sol.uniqueOccurrences([-3,0,1,-3,1,1,1,-3,10,0]))

# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

# April 22nd, 2024
# LeetCode Submission
# Found this leetcode sumbission that I wanted to save for future reference

# class Solution:
#     def uniqueOccurrences(self, arr: List[int]) -> bool:
#         dct = {}
#         for i in arr:
#             if i in dct:
#                 dct[i] += 1
#             else:
#                 dct[i] = 1
#         lst = []
#         for key, value in dct.items():
#             if value in lst:
#                 return False
#             else:
#                 lst.append(value)
#         return True

