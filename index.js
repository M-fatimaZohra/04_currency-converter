import inquirer from "inquirer";
const currency = {
    USD: 1, //base currency                                                 */ by this base currency we can easly convert any currency easly, we save alot of time by using this dynamic method now we do not need if else condition for each condition   /*
    EUR: 0.92,
    GBP: 0.77,
    INR: 83.52,
    PKR: 277.96,
};
let convertor = await inquirer.prompt([
    {
        name: "from",
        message: "Enter From Currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"],
    },
    {
        name: "to",
        message: "Enter To Currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"],
    },
    {
        name: "Enter",
        message: "Enter your Amount",
        type: "number",
    },
]);
let amountFrom = currency[convertor.from]; /*here we say that when we select any currency from convertor.from it connect it with same variable an contain in currency by using [] method                    */
let amountTo = currency[convertor.to]; /* line 36 comment sames goes for this too */
let Amount = convertor.Enter;
let baseAmmount = Amount / amountFrom;
let outputAmount = Math.ceil(baseAmmount * amountTo);
console.log(`\n YOUR INPUT AMMOUNT: ${Amount} ${convertor.from}S`);
console.log(`YOUR AMMOUNT IN DESIRED CURRENCY: ${outputAmount} ${convertor.to}S`);
