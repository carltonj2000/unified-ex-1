import fs from "fs";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkSlug from "remark-slug";
import remarkToc from "remark-toc";
import remarkHtml from "remark-html";

const file = unified()
  .use(remarkParse)
  .use(remarkSlug)
  .use(remarkToc, { prefix: "user-content-" })
  .use(remarkHtml)
  .processSync(fs.readFileSync("android.md"));

const out = /* html */ `<html lang="en">
${String(file)}
</html>`;

fs.writeFileSync("androidtoc.html", out);
