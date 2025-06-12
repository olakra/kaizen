class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """        
        index_map = {}  # key: number, value: index

        for idx, num in enumerate(nums):
            complement = target - num
            if complement in index_map:
                return [index_map[complement], idx]
            index_map[num] = idx

        raise ValueError("No solution exists")
