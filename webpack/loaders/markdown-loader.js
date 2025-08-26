/**
 * This custom webpack loader asynchronously finds all local image references
 * in a markdown file, uses webpack's resolver to process them, and replaces
 * the original paths with the final hashed URLs.
 * It then returns the processed markdown content as a string to the next loader.
 */
module.exports = function (source) {
  // Tell webpack this loader is asynchronous.
  const callback = this.async();
  const imageRegex = /!\[(.*?)]\((.*?)\)/g;

  const promises = [];
  let match;

  // Create a promise for each local image found.
  while ((match = imageRegex.exec(source)) !== null) {
    const [fullMatch, altText, imagePath] = match;

    // Ignore external images.
    if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
      continue;
    }

    const promise = new Promise((resolve, reject) => {
      // Use webpack's importModule to process the image path.
      // The result of the file-loader will be the final image path in source.default.
      this.importModule(imagePath, this.getOptions(), (err, source) => {
        if (err) return reject(err);
        // Resolve the promise with the original text and its replacement.
        resolve({
          original: fullMatch,
          replacement: `![${altText}](${source.default})`
        });
      });
    });
    promises.push(promise);
  }

  // Process all image imports.
  Promise.all(promises)
    .then(results => {
      let finalSource = source;
      // Replace the original image reference with the final hashed image path.
      for (const result of results) {
        finalSource = finalSource.replace(result.original, result.replacement);
      }
      // Return the final, processed markdown string.
      callback(null, finalSource);
    })
    .catch(err => {
      callback(err);
    });
};
