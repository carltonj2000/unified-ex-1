import { remove } from "unist-util-remove";
import { is } from "unist-util-is";

export default (options) => (tree) => {
  console.log(tree);
  remove(tree, (node) => is(node, { type: "heading", depth: 2 }));
};
