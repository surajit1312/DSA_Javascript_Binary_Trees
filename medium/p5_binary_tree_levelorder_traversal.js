const consoleUtils = require("console-log-pattern/src/index");
const treeify = require("treeify");

consoleUtils.logTitle(
  "Leetcode 102. Binary Tree Level Order Traversal",
  "◉",
  "yellow",
);
consoleUtils.logExeBlock(
  `Link: https://leetcode.com/problems/binary-tree-level-order-traversal/`,
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
 * @return {number[][]}
 */
const levelOrder = function (root) {
  const result = [];
  levelOrderTraversal(root, result);
  return result;
};

const levelOrderTraversal = function (root, result) {
  // Base case
  if (!root) {
    return;
  }
  const queue = [];
  queue.push({ node: root, level: 0 });
  while (queue.length > 0) {
    const current = queue.pop();
    const currentNode = current.node;
    const curLevel = current.level;
    if (!result[curLevel]) {
      result[curLevel] = [];
    }
    result[curLevel].unshift(currentNode.val);
    if (currentNode.left) {
      queue.push({ node: currentNode.left, level: curLevel + 1 });
    }
    if (currentNode.right) {
      queue.push({ node: currentNode.right, level: curLevel + 1 });
    }
  }
};

const levelOrderData = levelOrder(treeOutput);
consoleUtils.logExeBlock("Output:", true, "green");
console.log(levelOrderData);
consoleUtils.logExeBlock("", true, "green");
