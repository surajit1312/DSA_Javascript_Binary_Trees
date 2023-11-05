const consoleUtils = require("console-log-pattern/src/index");
const treeify = require("treeify");

consoleUtils.logTitle(
  "Leetcode 94. Binary Tree Inorder Traversal",
  "◉",
  "yellow",
);
consoleUtils.logExeBlock(
  `Link: https://leetcode.com/problems/binary-tree-inorder-traversal/`,
  true,
  "magenta",
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
  "magenta",
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
 * Left Node Right
 */
const inorderTraversal = function (root) {
  const traversalData = [];
  traverseInOrderTree(root, traversalData);
  return traversalData;
};

const traverseInOrderTree = function (root, data) {
  // Base case
  if (!root) {
    return;
  }
  traverseInOrderTree(root.left, data);
  data.push(root.val);
  traverseInOrderTree(root.right, data);
};

const inorderData = inorderTraversal(treeOutput);
consoleUtils.logExeBlock("Output:", true, "green");
console.log(inorderData);
consoleUtils.logExeBlock("", true, "green");
