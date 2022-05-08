import fs from "fs";
import { remark } from "remark";

import breakingPlugin from "./breaking-plugin";
import removePlugin from "./remove-plugin";
import headingPlugin from "./heading-plugin";

const doc = fs.readFileSync("fixture.md", "utf-8");

test("adds BREAKING to h1s", () => {
  const result = remark().use(breakingPlugin).processSync(doc);
  expect(result.value).toContain("# Breaking Hello, world!");
  // console.log(result.value);
});

test("remove h2s", () => {
  const result = remark().use(removePlugin).processSync(doc);
  expect(result.value).not.toContain("## I'm a h2");
  // console.log(result.value);
});

test("adds headings to the vfile data", () => {
  const result = remark().use(headingPlugin).processSync(doc);
  const { headings } = result.data;
  expect(headings).toEqual([
    { text: "Hello, world!", depth: 1 },
    { text: "I'm a h2", depth: 2 },
  ]);
  // console.log(result.value);
});
