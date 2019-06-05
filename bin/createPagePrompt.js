/**
 * Pizza delivery prompt example
 * run example by writing `node pizza.js` in your console
 */

'use strict';
var inquirer = require('inquirer');

console.log('Hi, welcome to Commander Pages');

var questions = [
  {
    type: 'input',
    name: 'title',
    message: "What is the title of your website?",
  },
];

inquirer.prompt(questions).then(answers => {
  console.log('\n Website Information:');
  console.log(JSON.stringify(answers, null, '  '));
});
