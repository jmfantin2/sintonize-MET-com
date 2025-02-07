const yaml = require('js-yaml');
const fs = require('fs');

module.exports = function (eleventyConfig) {
  // Carregar configurações do config.yaml
  const config = yaml.load(fs.readFileSync('./config.yaml', 'utf8'));
  eleventyConfig.addGlobalData('site', config);

  // Garantir que arquivos da pasta public/ sejam copiados para _site/
  eleventyConfig.addPassthroughCopy('public');

  return {
    dir: {
      input: '.', // Diretório de entrada
      output: '_site', // Diretório de saída
    },
  };
};
