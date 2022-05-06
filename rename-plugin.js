export function move(options = {}) {
  const { extname } = options;

  if (!extname) {
    throw new Error("Missing `extname` in options");
  }

  return transformer;

  function transformer(tree, file) {
    if (file.extname && file.extname !== extname) {
      file.extname = extname;
    }
  }
}
