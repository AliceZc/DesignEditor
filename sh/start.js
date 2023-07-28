#!/usr/bin/env node
const figlet = require("figlet");
const chalk = require('chalk');
const inquirer = require('inquirer');
const ora = require('ora');
const spawn = require('cross-spawn');

//艺术字  
figlet("Hello Programmer!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});
//字体
// console.log(chalk.blue('123'))
//交互
setTimeout(() => {
  inquirer
    .prompt([
      /* Pass your questions in here */
      {
        type: 'rawlist',
        name: 'mode',
        message: 'Please select your execute env:',
        choices: ['dev', 'uat', 'master', 'withNode', 'Exit'],
        default: 'withNode'
      }
    ])
    .then((answers) => {
      // Use user feedback for... whatever!!
      // console.log('answers:', answers);
      const { mode } = answers;
      console.log(chalk.blue('You have selected：') + chalk.blueBright.bold(mode));
      if (mode === "Exit") {
        console.log(chalk.yellowBright.bold('Exit, pelace restart!'));
        return
      }
      let cmd;
      console.log(chalk.greenBright.bold(`This is ${mode} mode...`));
      if (mode === "withNode") {
        cmd = "cross-env VERSION_ENV=withNode RUN_ENV=start NODE_ENV=development concurrently \"max dev\"  \"nodemon ./server/server.js\"";
      } else {
        cmd = `cross-env VERSION_ENV=${mode} RUN_ENV=start max dev`
      }
      spawn(cmd, {
        stdio: 'inherit'
      });
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
        console.log(chalk.redBright('Prompt could not be rendered in the current environment.'))
      } else {
        // Something else went wrong
        console.log(chalk.redBright('Something else went wrong.'))
      }
    });
}, 100)


