const fs = require('fs');
const path = require('path');
const helper = require('./helpers');
// const path = require('path');
// FIXME: what to do if in development?
const packagePath = path.dirname(require.resolve('commander-pages/package.json'));
// const packagePath = './';
// FIXME: should not have paths like this
const templateDir = '/templates/';
const defaultIndexText = fs.readFileSync(
  `${packagePath}${templateDir}index.md`,
  'utf8',
);

const createPage = (indexText) => {
  const srcDir = './src/';
  const pagesDir = './src/pages/';
  const markdownDir = './src/pages/markdown/';
  const markdownFileDir = `${markdownDir}index.md`;

  const text = fs.readFileSync(
    `${packagePath}${templateDir}gatsby-config.js`,
    'utf8',
  );

  helper.createDirectory(srcDir);
  helper.createDirectory(pagesDir);
  helper.createDirectory(markdownDir);

  // TODO: make console logs more developer friendly (possibly using color??)

  helper.createFile('gatsby-config.js', text);
  helper.createFile(markdownFileDir, indexText);
};

createPage(defaultIndexText);

module.exports.createPage = createPage;
