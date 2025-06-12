import Foundation

struct TwoSum {
    static func findIndices(nums: [Int], target: Int) -> [Int] {
        var map = [Int: Int]() // number -> index

        for (index, num) in nums.enumerated() {
            let complement = target - num

            if let complementIndex = map[complement] {
                return [complementIndex, index]
            }

            map[num] = index
        }

        // The problem guarantees a solution exists, so this is never reached.
        fatalError("No solution found")
    }
}
