/**
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
