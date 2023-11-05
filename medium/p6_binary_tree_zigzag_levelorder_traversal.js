const consoleUtils = require("console-log-pattern/src/index");
const treeify = require("treeify");

consoleUtils.logTitle(
  "Leetcode 103. Binary Tree Zigzag Level Order Traversal",
  "◉",
  "yellow",
);
consoleUtils.logExeBlock(
  `Link: https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/`,
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
const zigzagLevelOrder = function (root) {
  const result = [];
  zigzagLevelOrderTraversal(root, result);
  return result;
};

const zigzagLevelOrderTraversal = function (root, result) {
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
    if (curLevel % 2 === 0) {
      result[curLevel].unshift(currentNode.val);
    } else {
      result[curLevel].push(currentNode.val);
    }
    if (currentNode.left) {
      queue.push({ node: currentNode.left, level: curLevel + 1 });
    }
    if (currentNode.right) {
      queue.push({ node: currentNode.right, level: curLevel + 1 });
    }
  }
};

const zigzagLevelOrderData = zigzagLevelOrder(treeOutput);
consoleUtils.logExeBlock("Output:", true, "green");
console.log(zigzagLevelOrderData);
consoleUtils.logExeBlock("", true, "green");
