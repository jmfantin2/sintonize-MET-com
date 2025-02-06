module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('public');

  return {
    dir: {
      input: '.', // Diretório de entrada
      output: '_site', // Diretório de saída
    },
  };
};
