/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let length = nums.length;
    if(k>length){
        k = k%length;
    }
    for(let i=0; i<length - k; i++){
        nums.push(nums.shift());
    }
};