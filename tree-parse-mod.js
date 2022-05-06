import fs from "fs";
import { unified } from "unified";
import remarkParse from "remark-parse";
import { visit, SKIP } from "unist-util-visit";

const doc = fs.readFileSync("tree-parse-data.md");

const tree = unified().use(remarkParse).parse(doc);

visit(tree, "emphasis", function (node, index, parent) {
  // console.log(node);
  // console.log(node.type, index, parent.type);
  parent.children.splice(index, 1);
  parent.children.splice(index, 1, node.children);
  return [SKIP, index];
});

console.log(tree);
