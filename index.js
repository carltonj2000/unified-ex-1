import fs from "fs";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import matter from "gray-matter";

const processor = unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkRehype)
  .use(rehypeDocument, { title: "Android" })
  .use(rehypeFormat)
  .use(rehypeStringify);
const { data, content } = matter(fs.readFileSync("android.md"));

const file = processor.processSync(content);

fs.writeFileSync("android.html", String(file));
