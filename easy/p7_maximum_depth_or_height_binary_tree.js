const consoleUtils = require("console-log-pattern/src/index");
const treeify = require("treeify");

consoleUtils.logTitle(
  "Leetcode 104. Maximum Depth of Binary Tree",
  "◉",
  "green"
);
consoleUtils.logExeBlock(
  `Link: https://leetcode.com/problems/maximum-depth-of-binary-tree/`,
  true,
  "magenta"
);
consoleUtils.logExeBlock(`Input:`, true, "magenta");

consoleUtils.logNote(
  `                   3
*                    *   *
*                   *     *
*                  9      20
*                         * *
*                        *   *
*                       15    7`,
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

const arrayToBT = function (nums) {
  return createTree(nums, 0);
};

const createTree = function (nums, index) {
  let root = null;
  if (index < nums.length && nums[index]) {
    root = new TreeNode(nums[index]);
    root.left = createTree(nums, 2 * index + 1);
    root.right = createTree(nums, 2 * index + 2);
  }
  return root;
};

const input = [3, 9, 20, null, null, 15, 7];

const treeOutput = arrayToBT(input);
console.log(treeify.asTree(treeOutput, true, true));

/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = function (root) {
  if (!root) {
    return 0;
  }
  const lh = maxDepth(root.left);
  const rh = maxDepth(root.right);
  return 1 + Math.max(lh, rh);
};

const heightOfTree = maxDepth(treeOutput);
consoleUtils.logExeBlock("Height/Maximum Depth of Binary Tree", true, "green");
consoleUtils.logConsole(
  `Height/Maximum Depth of Binary Tree ${JSON.stringify(
    input
  )} is : ${heightOfTree}`,
  false,
  "magenta"
);
consoleUtils.logExeBlock("", true, "green");
