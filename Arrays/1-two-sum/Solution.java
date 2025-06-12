class Solution {
    public int[] twoSum(int[] nums, int target) {
        int [] indexes = new int [2];
        Map<Integer, Integer> map = new HashMap<Integer, Integer>();

        for(int idx = 0; idx < nums.length; idx++) {
            int diff = target - nums[idx];
            if (map.containsKey(diff)) 
                return (new int [] {map.get(diff).intValue(), idx});
            else 
                map.put(nums[idx], idx);
        }

        return indexes;
    }
}