/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map(); // key: number, value: index

    for (let idx = 0; idx < nums.length; idx++) {
        const complement = target - nums[idx];

        if (map.has(complement)) {
            return [map.get(complement), idx];
        }

        map.set(nums[idx], idx);
    }
    throw new Error("No solution exists");
};