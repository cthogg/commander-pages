#! /usr/bin/env node
// eslint-disable-next-line
const inquirer = require('inquirer');
const chalk = require('chalk');
const createPage = require('./createPage');

console.log('Hi, welcome to Commander Pages');

const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your website?',
    default: 'I am John Doe',
  },
  {
    type: 'input',
    name: 'subtitle',
    message: 'and the subtitle?',
    default: 'I am a web developer',
  },
];

inquirer.prompt(questions).then((answers) => {
  const { title, subtitle } = answers;
  const textFromAnswers = `---
title: "${title}"
subtitle: "${subtitle}" 
email: "john@doe.com"
linkedin: "https://www.linkedin.com/in/john_doe"
textColor: 'black'
backgroundColor: '#e5f1f6'
fontUrl: '"https://fonts.googleapis.com/css?family=Overlock&display=swap"'
fontFamily: 'Overlock, cursive;'
---

## Experience
- Building websites
   
   
   `;
  createPage.createPage(textFromAnswers);
  console.log(chalk.yellow.bold('\nPage Created Successfully'));
  console.log('\nplease run `yarn gatsby develop` to start');
});
