import { visit } from "unist-util-visit";

export default (options) => (tree) => {
  visit(tree, "heading", (node) => {
    if (node.depth !== 1) return;
    visit(node, "text", (textNode) => {
      textNode.value = "Breaking " + textNode.value;
    });
  });
};
