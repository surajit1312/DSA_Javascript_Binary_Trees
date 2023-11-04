const consoleUtils = require("console-log-pattern/src/index");
const treeify = require("treeify");

consoleUtils.logTitle("Coding Ninjas: Top View Of Binary Tree", "◉", "yellow");
consoleUtils.logExeBlock(
  `Link: https://www.codingninjas.com/studio/problems/top-view-of-binary-tree_799401`,
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
  *               4    5  6     7`,
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

const input = [1, 2, 3, 4, 5, 6, 7];

const treeOutput = arrayToBT(input);
console.log(treeify.asTree(treeOutput, true, true));

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const topViewBinaryTree = function (root) {
  return getTopViewBT(root, {});
};

const getTopViewBT = function (root, result) {
  if (!root) {
    return;
  }
  const queue = [{ node: root, hd: 0 }];
  while (queue.length) {
    const current = queue.pop();
    const { node, hd } = current;
    if (!result[hd]) {
      result[hd] = node.val;
    }
    if (node.left) {
      queue.push({ node: node.left, hd: hd - 1 });
    }
    if (node.right) {
      queue.push({ node: node.right, hd: hd + 1 });
    }
  }
  return Object.keys(result)
    .sort((a, b) => a - b)
    .map((key) => result[key]);
};

consoleUtils.logExeBlock("Top View of Binary Tree", true, "green");
consoleUtils.logConsole(
  `Top View of Binary Tree: ${JSON.stringify(input)} is : ${JSON.stringify(
    topViewBinaryTree(treeOutput)
  )}`,
  false,
  "magenta"
);
consoleUtils.logExeBlock("", true, "green");
