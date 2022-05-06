import fs from "fs";
import { unified } from "unified";
import markdown from "remark-parse";
import rehypeStringify from "rehype-stringify";
import treeInsertPlugin from "./tree-insert-plugin.js";
import remark2rehype from "remark-rehype";

const contents = unified()
  .use(markdown)
  .use(() => (tree) => {
    // console.log("vscode break to inspect tree");
  })
  .use(remark2rehype)
  .use(treeInsertPlugin)
  .use(rehypeStringify)
  .processSync(fs.readFileSync(`tree-insert-data.md`))
  .toString();

console.log(contents);
