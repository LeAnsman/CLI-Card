#!/usr/bin/env node

import chalk from "chalk";
import boxen from "boxen";

const NEWLINE = "\n";
const EMPTYLINE = "";

const data = {
  name: "                       " + chalk.white.underline("Anselme Dor"),
  github:
    chalk.white.underline("Github") +
    " :" +
    chalk.gray(" https://github.com/") +
    chalk.red("LeAnsman"),
  linkedin:
    chalk.white.underline("Linkedin") +
    " :" +
    chalk.gray(" https://www.linkedin.com/in/") +
    chalk.yellow("anselme-dor-704b7a20a/"),
  npm:
    chalk.white.underline("NPM") +
    " : " +
    chalk.gray("https://www.npmjs.com/") +
    chalk.magenta("~leansman"),
  card:
    chalk.white.underline("Card") +
    " : " +
    chalk.magenta("npx ") +
    chalk.red("@leansman") +
    chalk.black("/") +
    chalk.yellow("card"),
};

console.log(
  boxen(
    [
      `${data.name}`,
      EMPTYLINE,
      EMPTYLINE,
      `${data.npm}`,
      `${data.github}`,
      `${data.linkedin}`,
      EMPTYLINE,
      `${data.card}`,
    ].join(NEWLINE),
    {
      padding: 2,
      margin: 2,
      borderColor: "greenBright",
      borderStyle: "round",
    }
  )
);
