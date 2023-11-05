const consoleUtils = require("console-log-pattern/src/index");
const treeify = require("treeify");

consoleUtils.logTitle(
  "Leetcode 987. Vertical Order Traversal of a Binary Tree",
  "◉",
  "red",
);
consoleUtils.logExeBlock(
  `Link: https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/`,
  true,
  "magenta",
);
consoleUtils.logExeBlock(
  `Link: https://www.codingninjas.com/studio/problems/vertical-order-traversal_3622711`,
  true,
  "magenta",
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

const input = [1, 2, 3, 4, 5, 6, 7];

const treeOutput = arrayToBT(input);
console.log(treeify.asTree(treeOutput, true, true));

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const verticalTraversal = function (root) {
  const traversalData = new Map();
  getVerticalTraversalData(root, traversalData, 0, 0);
  const data = [...traversalData]
    .sort((a, b) => a[0] - b[0])
    .map((item) => {
      const valueItem = item[1];
      const innerMap = new Map();
      valueItem.forEach((element) => {
        if (!innerMap.get(element.level)) {
          innerMap.set(element.level, []);
        }
        innerMap.get(element.level).push(element.data);
      });
      const final = [];
      for (let [key, value] of innerMap) {
        value.sort();
        final.unshift(...value);
      }
      return final;
    });
  return data;
};

const getVerticalTraversalData = function (root, traversalData, hor, level) {
  if (!root) {
    return;
  }
  const queue = [];
  queue.unshift({ node: root, hor, level });
  while (queue.length > 0) {
    const current = queue.pop();
    const { node, hor, level } = current;
    if (!traversalData.get(hor)) {
      traversalData.set(hor, [{ level, data: node.val }]);
    } else {
      traversalData.get(hor).unshift({ level, data: node.val });
    }
    if (node.left) {
      getVerticalTraversalData(node.left, traversalData, hor - 1, level + 1);
    }
    if (node.right) {
      getVerticalTraversalData(node.right, traversalData, hor + 1, level + 1);
    }
  }
};

const verticalTraversalData = verticalTraversal(treeOutput);

consoleUtils.logExeBlock(
  "Vertical Order Traversal of Binary Tree",
  true,
  "green",
);
consoleUtils.logConsole(
  `Vertical Order Traversal of Binary Tree: ${JSON.stringify(
    input,
  )} is : ${JSON.stringify(verticalTraversalData)}`,
  false,
  "magenta",
);
consoleUtils.logExeBlock("", true, "green");
