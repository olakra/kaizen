package main

import (
	"fmt"
)

func twoSum(nums []int, target int) []int {
	// Map to store number -> index
	numMap := make(map[int]int)

	for i, num := range nums {
		complement := target - num

		if idx, found := numMap[complement]; found {
			return []int{idx, i}
		}

		numMap[num] = i
	}

	// According to the problem, there is always exactly one solution.
	// Return nil or panic if no solution is found.
	return nil
}

func main() {
	nums := []int{2, 7, 11, 15}
	target := 9

	result := twoSum(nums, target)
	fmt.Println(result) // Output: [0 1]
}
