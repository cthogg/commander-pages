#! /usr/bin/env node
var helper = require('./helpers')
var program = require("commander");
var fs = require("fs");
const path = require('path');
// FIXME: what to do if in development?
// const packagePath = path.dirname(require.resolve("commander-pages/package.json"));
const packagePath = '.'
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
const markdownDir = "./src/pages/markdown/";
const markdownFileDir = markdownDir + "index.md"
var templateDir = "/templates/";

var text = fs.readFileSync(packagePath + '/' + templateDir + "gatsby-config.js", "utf8");
var indexText = fs.readFileSync(packagePath + '/' + templateDir + "index.md", "utf8");

// FIXME: refactor repeated if statements
helper.createDirectory(srcDir);
helper.createDirectory(pagesDir);
helper.createDirectory(markdownDir)

// FIXME: refactor repeated write files
// TODO: make console logs more developer friendly (possibly using color??)
helper.createFile("gatsby-config.js", text)
helper.createFile(markdownFileDir,indexText)
