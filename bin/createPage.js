const program = require('commander');
const fs = require('fs');
const path = require('path');
const helper = require('./helpers');
// const path = require('path');
// FIXME: what to do if in development?
const packagePath = path.dirname(require.resolve('commander-pages/package.json'));
// const packagePath = '.';
// TODO: set parameters for the color scheme
program
  .version('0.0.1')
  .description('An application for pizzas ordering')
  .option('-p, --peppers', 'Add peppers')
  .option('-P, --pineapple', 'Add pineapple')
  .option('-b, --bbq', 'Add bbq sauce')
  .option('-c, --cheese <type>', 'Add the specified type of cheese [marble]')
  .option('-C, --no-cheese', 'You do not want any cheese')
  .parse(process.argv);

// FIXME: should not have paths like this
const templateDir = '/templates/';
const defaultIndexText = fs.readFileSync(
  // FIXME: need to add a / between dirs if developing locally
  `${packagePath}${templateDir}index.md`,
  'utf8',
);

const createPage = (indexText) => {
  const srcDir = './src/';
  const pagesDir = './src/pages/';
  const markdownDir = './src/pages/markdown/';
  const markdownFileDir = `${markdownDir}index.md`;

  const text = fs.readFileSync(
    // FIXME: need to add a / between dirs if developing locally
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
