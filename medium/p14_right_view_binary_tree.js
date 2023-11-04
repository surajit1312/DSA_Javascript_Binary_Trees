const consoleUtils = require("console-log-pattern/src/index");
const treeify = require("treeify");

consoleUtils.logTitle(
  "Leetcode 199. Binary Tree Right Side View",
  "◉",
  "yellow"
);
consoleUtils.logExeBlock(
  `Link: https://leetcode.com/problems/binary-tree-right-side-view/`,
  true,
  "magenta"
);

consoleUtils.logExeBlock(`Input:`, true, "magenta");

consoleUtils.logNote(
  `                     1
  *                    *   *
  *                   *     *
  *                  2       3
  *                 * *     * *
  *                *   *   *   *
  *               4    5  6     7
  *              * *
  *             *   *
  *            8     9`,
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

const input = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const treeOutput = arrayToBT(input);
console.log(treeify.asTree(treeOutput, true, true));

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const rightSideView = function (root) {
  return getRightViewBT(root, 0, []);
};

const getRightViewBT = function (root, level, result) {
  if (!root) {
    return null;
  }
  if (!result[level]) {
    result[level] = root.val;
  }
  if (root.right) {
    getRightViewBT(root.right, level + 1, result);
  }
  if (root.left) {
    getRightViewBT(root.left, level + 1, result);
  }
  return result;
};

consoleUtils.logExeBlock("Right Side View of Binary Tree", true, "green");
consoleUtils.logConsole(
  `Right Side View of Binary Tree: ${JSON.stringify(
    input
  )} is : ${JSON.stringify(rightSideView(treeOutput))}`,
  false,
  "magenta"
);
consoleUtils.logExeBlock("", true, "green");
