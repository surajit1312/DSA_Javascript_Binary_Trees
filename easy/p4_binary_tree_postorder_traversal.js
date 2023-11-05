const consoleUtils = require("console-log-pattern/src/index");
const treeify = require("treeify");

consoleUtils.logTitle(
  "Leetcode 145. Binary Tree Postorder Traversal",
  "◉",
  "yellow",
);
consoleUtils.logExeBlock(
  `Link: https://leetcode.com/problems/binary-tree-postorder-traversal/`,
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
 * Left Right Node
 */
const postorderTraversal = function (root) {
  const postOrderData = [];
  traversePostOrderTree(root, postOrderData);
  return postOrderData;
};

const traversePostOrderTree = function (root, data) {
  // Base case
  if (!root) {
    return;
  }
  traversePostOrderTree(root.left, data);
  traversePostOrderTree(root.right, data);
  data.push(root.val);
};

const postOrderData = postorderTraversal(treeOutput);
consoleUtils.logExeBlock("Output:", true, "green");
console.log(postOrderData);
consoleUtils.logExeBlock("", true, "green");
