#! /usr/bin/env node
var program = require('commander')
var fs = require('fs');
  //TODO: set parameters for the color scheme
program
  .version('0.0.1')
  .description('An application for pizzas ordering')
  .option('-p, --peppers', 'Add peppers')
  .option('-P, --pineapple', 'Add pineapple')
  .option('-b, --bbq', 'Add bbq sauce')
  .option('-c, --cheese <type>', 'Add the specified type of cheese [marble]')
  .option('-C, --no-cheese', 'You do not want any cheese')
  .parse(process.argv);


  var dir = './site/';
  var markdownDir = './site/pages/markdown/';

  var pagesDir = './site/pages/';

  var templateDir = './templates/';

  var text = fs.readFileSync(templateDir + 'gatsby-config.js','utf8')
  var indexText = fs.readFileSync(templateDir + 'index.md','utf8')

  //FIXME: refactor repeated if statements
  if (!fs.existsSync(dir, { recursive: true })){
    fs.mkdirSync(dir, { recursive: true });
      console.log('created')
  }  
  if (!fs.existsSync(markdownDir, { recursive: true })){
    fs.mkdirSync(markdownDir, { recursive: true });
      console.log('created')
  }  
  if (!fs.existsSync(pagesDir, { recursive: true })){
    fs.mkdirSync(pagesDir, { recursive: true });
      console.log('created')
  }  
  if (!fs.existsSync(markdownDir, { recursive: true })){
    fs.mkdirSync(markdownDir, { recursive: true });
      console.log('created')
  }  


  //FIXME: refactor repeated write files
  // TODO: make console logs more developer friendly (possibly using color??)
  fs.writeFile(dir + "gatsby-config.js", text, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
}); 

fs.writeFile(markdownDir + "index.md", indexText, function(err) {
  if(err) {
      return console.log(err);
  }
  console.log("The file was saved!");
}); 