# Unified Example 1

MDX parsing.

## To Do

- remark file name insertion
- remark yaml front matter title insertion
- remark plug in

## plugin-test.js

Uses the local `rename-plugin.js` plugin to rename a file extension.

## tree-parse-mod.js

Removes the emphasis in the markup document.

## tree-insert.js

Add caption to text.

Based on the
[How to Modify Nodes in an Abstract Syntax Tree](https://css-tricks.com/how-to-modify-nodes-in-an-abstract-syntax-tree/)
article.

## Code History

The code on this repository is base on the
[Using Unified](https://unifiedjs.com/learn/guide/using-unified/)
article.

```bash
npm init -y
npm install unified unified-stream remark-parse remark-rehype rehype-stringify remark-gfm rehype-document rehype-format
npm install gray-matter
npm install remark-extract-frontmatter to-vfile remark-stringify yaml
npm install unist-util-visit
npm install remark-html remark-rehype rehype-document rehpe-format rehype-stringify
```
