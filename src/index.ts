import convention from "./convention.js";
import chalk from "chalk";
import figlet from "figlet";
import inquirer from "inquirer";

import Stage from "./stage.type.js";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function welcome() {
  figlet("Get Me Var !!", function (err: any, data: any) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });
  await sleep(3000);
}

await welcome();

async function ask(stage: any): Promise<string | Stage> {
  const answer = await inquirer.prompt({
    type: "list",
    name: stage.name,
    message: `"What ${stage.name} do you want to use?"`,
    choices: Object.keys(stage.choices),
  });

  return stage.choices[answer[stage.name]];
}

let stage: any = convention;

while (stage instanceof Object && !(stage instanceof Array)) {
  const newStage = await ask(stage);
  stage = newStage;
}
const answer = stage;

if (Array.isArray(answer)) {
  console.log("You should use one of the following for your variable name:");

  answer.forEach((element) => {
    console.log(chalk.blueBright(element));
  });
} else {
  console.log(
    chalk.white("You should use"),
    chalk.blueBright(answer),
    chalk.white("for your variable name.")
  );
}
