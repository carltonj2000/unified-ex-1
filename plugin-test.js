import fs from "fs";
import { unified } from "unified";
import remarkParse from "remark-parse";
import compiler from "remark-stringify";
import frontmatter from "remark-frontmatter";
import extract from "remark-extract-frontmatter";
import { toVFile } from "to-vfile";
import yaml from "yaml";
import { move } from "./rename-plugin.js";

const file = unified()
  .use(remarkParse)
  .use(compiler)
  .use(frontmatter)
  .use(extract, { yaml: yaml.parse })
  .use(move, { extname: ".html" })
  .processSync(toVFile.readSync("android.md"));

console.log(
  `front matter and string\n${file.data}\n${file.toString().substring(0, 70)}`
);
