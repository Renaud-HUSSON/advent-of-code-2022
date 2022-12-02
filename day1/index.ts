import { readFileSync } from "fs";

const inputFileName = "input.txt";
const input = readFileSync(`${__dirname}/${inputFileName}`).toString();
// --------------------------------------------------------------------

const calories: number[] = input.split("\r\n").map((cal) => parseInt(cal, 10));
const groupCaloriesSum: number[] = calories.reduce(
  (prev, curr) => {
    if (isNaN(curr)) {
      return [...prev, 0];
    }

    const currentGroup = prev.pop() ?? 0;

    return [...prev, currentGroup + curr];
  },
  [0]
);
const sortedCalories = groupCaloriesSum.sort((a, b) => b - a);
const topCalories = sortedCalories.slice(0, 3);

const maxCalories = topCalories[0];
const top3CaloriesSum = topCalories.reduce((prev, curr) => prev + curr, 0);

console.log("maxCalories", maxCalories);
console.log("top3CaloriesSum", top3CaloriesSum);
