const consoleUtils = require("console-log-pattern/src/index");
const treeify = require("treeify");

consoleUtils.logTitle(
  "Leetcode 144. Binary Tree Preorder Traversal",
  "◉",
  "yellow"
);
consoleUtils.logExeBlock(
  `Link: https://leetcode.com/problems/binary-tree-preorder-traversal/`,
  true,
  "magenta"
);
consoleUtils.logExeBlock(`Input:`, true, "magenta");

consoleUtils.logNote(
  `                   4
*                    *   *
*                   *     *
*                  6       1
*                 * *     * *
*                *   *   *   *
*              -9     7 8     12
*              * *
*             *   *
*            45   -10`,
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

const input = [4, 6, 1, -9, 7, 8, 12, 45, -10];

const treeOutput = arrayToBT(input);
console.log(treeify.asTree(treeOutput, true, true));

/**
 * @param {TreeNode} root
 * @return {number[]}
 * Node Left Right
 */
const preorderTraversal = function (root) {
  const preOrderData = [];
  traversePreOrderTree(root, preOrderData);
  return preOrderData;
};

const traversePreOrderTree = function (root, data) {
  // Base case
  if (!root) {
    return;
  }
  data.push(root.val);
  traversePreOrderTree(root.left, data);
  traversePreOrderTree(root.right, data);
};

const preOrderData = preorderTraversal(treeOutput);
consoleUtils.logExeBlock("Output:", true, "green");
console.log(preOrderData);
consoleUtils.logExeBlock("", true, "green");
