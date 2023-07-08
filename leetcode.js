/**
 * 寻找数组的中心索引
 * 
 * 给你一个整数数组 nums ，请计算数组的 中心下标 。
 * 数组 中心下标 是数组的一个下标，其左侧所有元素相加的和等于右侧所有元素相加的和。
 * 如果中心下标位于数组最左端，那么左侧数之和视为 0 ，因为在下标的左侧不存在元素。这一点对于中心下标位于数组最右端同样适用。
 * 如果数组有多个中心下标，应该返回 最靠近左边 的那一个。如果数组不存在中心下标，返回 -1 。
 * 
 * 1991.
 * https://leetcode.cn/problems/find-the-middle-index-in-array
 * 
 * @param {*} nums 
 */
let pivotIndex = function (nums) {
    if (nums.length === 1) {
        return 0
    }

    let sum = 0;
    for (const data of nums) {
        sum += data;
    }

    let left_sum = 0;
    for (let index = 0; index < nums.length; index++) {
        if (index > 0) {
            left_sum += nums[index - 1];
        }
        let current = nums[index];
        if (left_sum * 2 + current === sum) {
            return index;
        }
    }

    return -1;
};


/**
 * 搜索插入位置
 * 
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
 * 请必须使用时间复杂度为 O(log n) 的算法。
 * 
 * 题解：二分查找
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    if (target <= nums[0]) {
        return 0;
    }

    let high = nums.length - 1;
    if (target === nums[high]) {
        return high;
    }
    if (target > nums[high]) {
        return high + 1;
    }

    let left = 0;
    let right = nums.length - 1;
    let middle = 0;

    while (left <= right) {
        middle = Math.floor((left + right) / 2);
        if (nums[middle] < target) {
            left = middle + 1;
        }
        else if (nums[middle] > target) {
            right = middle - 1;
        }
        else {
            return middle;
        }
    }

    return left;
};