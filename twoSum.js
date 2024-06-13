function twoSum(nums, target) {
    let hashmap = new Map();

    for(let i = 0; i < nums.length; i++){
        let temp = target - nums[i];

        if (hashmap.has(nums[i])){
            console.log( `${nums[i]} and ${temp} both add up to ${target}` );
            return;
        } else {
            hashmap.set(temp);
        }
    }
}

nums = [2, 3, 8, 6, 4];
twoSum(nums, 9);