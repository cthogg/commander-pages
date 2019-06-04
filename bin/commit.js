#! /usr/bin/env node
var program = require('commander')
var fs = require('fs');
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
  var templateDir = './templates/';

  var text = fs.readFileSync(templateDir + 'gatsby-config.js','utf8')
  if (!fs.existsSync(dir, { recursive: true })){
    fs.mkdirSync(dir, { recursive: true });
      console.log('created')
  }  

  fs.writeFile(dir + "gatsby-config.js", text, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
}); 