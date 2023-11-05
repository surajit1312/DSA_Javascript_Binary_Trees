const consoleUtils = require("console-log-pattern/src/index");
const treeify = require("treeify");

consoleUtils.logTitle("Leetcode 100. Same Tree", "◉", "green");
consoleUtils.logExeBlock(
  `Link: https://leetcode.com/problems/same-tree/`,
  true,
  "magenta",
);
consoleUtils.logExeBlock(
  `Link: https://www.codingninjas.com/studio/problems/check-identical-trees_799364`,
  true,
  "magenta",
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

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
const isSameTree = function (p, q) {
  if (!p || !q) {
    return p === q;
  }
  // Pre-Order Traversal (Node -> Left -> Right)
  return (
    p.val === q.val &&
    isSameTree(p.left, q.left) &&
    isSameTree(p.right, q.right)
  );
};

consoleUtils.logExeBlock("Testcase 1", true, "green");

const input1 = [3, 9, 20, null, null, 15, 7];

const treeOutput1 = arrayToBT(input1);
console.log(treeify.asTree(treeOutput1, true, true));
const treeOutput2 = arrayToBT(input1);
console.log(treeify.asTree(treeOutput2, true, true));

const identical1 = isSameTree(treeOutput1, treeOutput2);
consoleUtils.logExeBlock("Are Binary Trees Identical", true, "green");
consoleUtils.logConsole(
  `Are Binary Trees Identical ${JSON.stringify(input1)} and ${JSON.stringify(
    input1,
  )} identical : ${identical1}`,
  false,
  "magenta",
);
consoleUtils.logExeBlock("", true, "green");

consoleUtils.logExeBlock("Testcase 2", true, "green");

const input2 = [3, 9, 20, null, null, 15];

const treeOutput3 = arrayToBT(input1);
console.log(treeify.asTree(treeOutput3, true, true));
const treeOutput4 = arrayToBT(input2);
console.log(treeify.asTree(treeOutput4, true, true));

const identical2 = isSameTree(treeOutput3, treeOutput4);
consoleUtils.logExeBlock("Are Binary Trees Identical", true, "green");
consoleUtils.logConsole(
  `Are Binary Trees Identical ${JSON.stringify(input1)} and ${JSON.stringify(
    input2,
  )} identical : ${identical2}`,
  false,
  "magenta",
);
consoleUtils.logExeBlock("", true, "green");
