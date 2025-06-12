function twoSum(nums: number[], target: number): number[] {
    const map: Map<number, number> = new Map();
  
    for (let idx = 0; idx < nums.length; idx++) {
      const complement: number = target - nums[idx];
  
      if (map.has(complement)) {
        return [map.get(complement)!, idx]; // non-null assertion since it's guaranteed to exist
      }
  
      map.set(nums[idx], idx);
    }
  
    throw new Error("No valid two sum solution found");
  }
  