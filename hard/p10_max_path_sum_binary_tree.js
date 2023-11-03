const consoleUtils = require("console-log-pattern/src/index");
const treeify = require("treeify");

consoleUtils.logTitle("Leetcode 124. Binary Tree Maximum Path Sum", "◉", "red");
consoleUtils.logExeBlock(
  `Link: https://leetcode.com/problems/binary-tree-maximum-path-sum/`,
  true,
  "magenta"
);
consoleUtils.logExeBlock(
  `Link: https://www.codingninjas.com/studio/problems/maximum-sum-path-of-a-binary-tree._1214968`,
  true,
  "magenta"
);
consoleUtils.logExeBlock(`Input:`, true, "magenta");

consoleUtils.logNote(
  `                  -10
*                    *   *
*                   *     *
*                  9       20
*                          * *
*                         *   *
*                        15    7`,
  false,
  "",
  "",
  "magenta"
);
consoleUtils.logExeBlock("", true, "magenta");

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const arrayToBT = function (nums) {
  return createTree(nums, 0);
};

const createTree = function (nums, index) {
  let root = null;
  if (index < nums.length) {
    root = new TreeNode(nums[index]);
    root.left = createTree(nums, 2 * index + 1);
    root.right = createTree(nums, 2 * index + 2);
  }
  return root;
};

const input = [-10, 9, 20, null, null, 15, 7];

const treeOutput = arrayToBT(input);
console.log(treeify.asTree(treeOutput, true, true));

/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxPathSum = function (root) {
  let maxSum = [-Infinity];
  getMaximumSumPath(root, maxSum);
  return maxSum[0];
};

const getMaximumSumPath = function (root, maxSum) {
  if (!root) {
    return 0;
  }
  const leftMax = Math.max(0, getMaximumSumPath(root.left, maxSum));
  const rightMax = Math.max(0, getMaximumSumPath(root.right, maxSum));
  maxSum[0] = Math.max(maxSum[0], leftMax + rightMax + root.val);
  return Math.max(leftMax, rightMax) + root.val;
};

const maxSum = maxPathSum(treeOutput);

consoleUtils.logExeBlock("Binary Tree Maximum Path Sum", true, "green");
consoleUtils.logConsole(
  `Binary Tree Maximum Path Sum of ${JSON.stringify(input)} is : ${maxSum}`,
  false,
  "green"
);
consoleUtils.logExeBlock("", true, "green");
