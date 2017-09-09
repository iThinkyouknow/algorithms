/**
    Given an array of integers, return indices of the two numbers such that they add up to a specific target.
    You may assume that each input would have exactly one solution, and you may not use the same element twice.

    Example:
    Given nums = [2, 7, 11, 15], target = 9,

    Because nums[0] + nums[1] = 2 + 7 = 9,
    return [0, 1].
    
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const eg = [2, 7, 11, 15];
const target = 9;

var twoSum = function(nums, target) {
    
    const sum = (i,  cache, nums, target) => {
    	// cache will take the complement
    	const curr = nums[i];

     	if (cache[curr] !== undefined && cache[curr] !== null) {
     		return [cache[curr], i];
     	} else if (i >= nums.length) {
     		return [];
     	} else {
     		const complement = target - curr;
     		const new_cache = Object.assign(cache, {[complement]: i});
     		
     		const new_i = i + 1;
     		return sum(new_i,  new_cache, nums, target);
     	}
    };

    return sum(0,  {}, nums, target);
};

const result = twoSum(eg, target);
console.log(result);
