#! /usr/bin/env node
var program = require("commander");
var fs = require("fs");
const path = require('path');
// FIXME: what to do if in development?
const packagePath = path.dirname(require.resolve("commander-pages/package.json"));
console.log(packagePath)
//TODO: set parameters for the color scheme
program
  .version("0.0.1")
  .description("An application for pizzas ordering")
  .option("-p, --peppers", "Add peppers")
  .option("-P, --pineapple", "Add pineapple")
  .option("-b, --bbq", "Add bbq sauce")
  .option("-c, --cheese <type>", "Add the specified type of cheese [marble]")
  .option("-C, --no-cheese", "You do not want any cheese")
  .parse(process.argv);

  // FIXME: should not have paths like this
var srcDir = './src/'
var pagesDir = "./src/pages/";
var markdownDir = "./src/pages/markdown/";
var templateDir = "/templates/";

var text = fs.readFileSync(packagePath + '/' + templateDir + "gatsby-config.js", "utf8");
var indexText = fs.readFileSync(packagePath + '/' + templateDir + "index.md", "utf8");

// FIXME: refactor repeated if statements
if (!fs.existsSync(srcDir, { recursive: true })) {
  fs.mkdirSync(srcDir, { recursive: true });
  console.log("created");
}
if (!fs.existsSync(pagesDir, { recursive: true })) {
  fs.mkdirSync(pagesDir, { recursive: true });
  console.log("created");
}
if (!fs.existsSync(markdownDir, { recursive: true })) {
  fs.mkdirSync(markdownDir, { recursive: true });
  console.log("created");
}

// FIXME: refactor repeated write files
// TODO: make console logs more developer friendly (possibly using color??)
fs.writeFile("gatsby-config.js", text, function(err) {
  if (err) {
    return console.log(err);
  }
  console.log("The file was saved!");
});

fs.writeFile(markdownDir + "index.md", indexText, function(err) {
  if (err) {
    return console.log(err);
  }
  console.log("The file was saved!");
});
