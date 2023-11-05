const consoleUtils = require("console-log-pattern/src/index");
const treeify = require("treeify");

consoleUtils.logTitle(
  "Leetcode 111. Minimum Depth of Binary Tree",
  "◉",
  "green",
);
consoleUtils.logExeBlock(
  `Link: https://leetcode.com/problems/minimum-depth-of-binary-tree/`,
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

const input1 = [3, 9, 20, null, null, 15, 7];

const treeOutput1 = arrayToBT(input1);
console.log(treeify.asTree(treeOutput1, true, true));

/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  if (!root) {
    return 0;
  }
  const queue = [];
  let depth = 1;
  queue.push({ node: root, level: depth });
  let minDepth = Infinity;
  while (queue.length) {
    const current = queue.pop();
    const currentNode = current.node;
    const currentLevel = current.level;
    if (currentNode.left === null && currentNode.right === null) {
      minDepth = Math.min(minDepth, currentLevel);
    }
    if (currentNode.left) {
      queue.unshift({ node: currentNode.left, level: currentLevel + 1 });
    }
    if (currentNode.right) {
      queue.unshift({ node: currentNode.right, level: currentLevel + 1 });
    }
  }
  return minDepth;
};

const minDepthTree1 = minDepth(treeOutput1);
consoleUtils.logExeBlock("Minimum Depth of Binary Tree", true, "green");
consoleUtils.logConsole(
  `Minimum Depth of Binary Tree ${JSON.stringify(
    input1,
  )} is : ${minDepthTree1}`,
  false,
  "magenta",
);
consoleUtils.logExeBlock("", true, "green");

const input2 = [1, 2, 3, 4, 5];

const treeOutput2 = arrayToBT(input2);
console.log(treeify.asTree(treeOutput2, true, true));

const minDepthTree2 = minDepth(treeOutput2);
consoleUtils.logExeBlock("Minimum Depth of Binary Tree", true, "green");
consoleUtils.logConsole(
  `Minimum Depth of Binary Tree ${JSON.stringify(
    input2,
  )} is : ${minDepthTree2}`,
  false,
  "magenta",
);
consoleUtils.logExeBlock("", true, "green");
