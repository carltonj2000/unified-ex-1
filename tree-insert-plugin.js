import { visit } from "unist-util-visit";

export default (options) => (tree) => {
  //console.log("vscode break for tree inspection");
  visit(
    tree,
    (node) =>
      node.tagName === "p" && node.children.some((n) => n.tagName === "img"),
    (node) => {
      const textNode = node.children.find((n) => n.type === "text");
      if (!textNode) return;
      node.tagName = "figure";

      textNode.type = "element";
      textNode.tagName = "figcaption";

      const caption = textNode.value.trim();
      textNode.children = [{ type: "text", value: caption }];
    }
  );
};
