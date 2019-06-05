/**
 * Pizza delivery prompt example
 * run example by writing `node pizza.js` in your console
 */

'use strict';
var inquirer = require('inquirer');
var createPage = require('./createPage')
console.log('Hi, welcome to Commander Pages');

var questions = [
  {
    type: 'input',
    name: 'title',
    message: "What is the title of your website?",
  },
];

inquirer.prompt(questions).then(answers => {

   const textFromAnswers = `
   
---
title: ${answers.title}
subtitle: "My Website"
email: "john@doe.com"
linkedin: "https://www.linkedin.com/in/john_doe"
textColor: 'black'
backgroundColor: '#e5f1f6'
fontUrl: '"https://fonts.googleapis.com/css?family=Overlock&display=swap"'
fontFamily: 'Overlock, cursive;'
---

## Experience
- Building websites
   
   
   `
   
   
  console.log('\n Website Information:');
  console.log(JSON.stringify(answers, null, '  '));
  console.log(textFromAnswers)
  createPage.createPage(textFromAnswers)
});
