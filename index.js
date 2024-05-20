import inquirer from "inquirer";
import chalk from "chalk";
import { differenceInSeconds } from "date-fns";
const res = await inquirer.prompt({
    name: "usrInput",
    type: "number",
    message: "Please  enter the number of seconds",
    validate: (input) => {
        if (isNaN(input)) {
            return "Please Enter in Number";
        }
        else if (input > 60) {
            return "Please give value under 60 Second";
        }
        else {
            return true;
        }
    },
});
let input = res.usrInput;
function startTime(val) {
    const initialTime = new Date().setSeconds(new Date().getSeconds() + val);
    const intervalTime = new Date(initialTime);
    setInterval(() => {
        const cTime = new Date();
        const timeDiff = differenceInSeconds(intervalTime, cTime);
        if (timeDiff <= 0) {
            console.log("00:00\n");
            console.log(chalk.red.bold `Timer has Expired`);
            process.exit();
        }
        const min = Math.floor((timeDiff % (3600 * 24)) / 3600);
        const sec = Math.floor(timeDiff % 60);
        console.log(`${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`);
    }, 1000);
}
startTime(input);
