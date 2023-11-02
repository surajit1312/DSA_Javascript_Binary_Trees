const consoleUtils = require("console-log-pattern/src/index");
const treeify = require("treeify");

consoleUtils.logTitle(
  "Binary Trees - Convert Array to Binary Tree - Level Order Traversal",
  "◉",
  "yellow"
);
consoleUtils.logExeBlock(
  `Input: [4, 6, 1, -9, 7, 8, 12, 45, -10]`,
  true,
  "magenta"
);
consoleUtils.logExeBlock(
  `Link: https://www.codingninjas.com/studio/problems/create-binary-tree_8360671`,
  true,
  "magenta"
);

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
  constructor(value, left, right) {
    this.value = value;
    this.left = left | null;
    this.right = right | null;
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

consoleUtils.logExeBlock("Output:", true, "green");
console.log(treeify.asTree(treeOutput, true, true));
consoleUtils.logExeBlock("", true, "green");
