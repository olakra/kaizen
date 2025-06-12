class Solution {
  List<int> twoSum(List<int> nums, int target) {
    final Map<int, int> map = {}; // value -> index

    for (int i = 0; i < nums.length; i++) {
        final int complement = target - nums[i];

        if (map.containsKey(complement)) {
        return [map[complement]!, i];
        }

        map[nums[i]] = i;
    }

    throw ArgumentError('No two sum solution found');
    }
}