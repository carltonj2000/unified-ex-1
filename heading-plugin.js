import { visit } from "unist-util-visit";

export default (options) => (tree, file) => {
  file.data.headings = [];
  visit(tree, "heading", (node) => {
    const depth = node.depth;
    visit(node, "text", (textNode) => {
      const text = textNode.value;
      file.data.headings.push({ text, depth });
    });
  });
};
