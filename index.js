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


  var dir = './tmp';

  if (!fs.existsSync(dir, { recursive: true })){
    fs.mkdirSync(dir, { recursive: true });
      console.log('created')
  }  

console.log(program.args);
