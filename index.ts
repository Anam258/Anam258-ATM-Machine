#! usr/bin/env node
import inquirer from "inquirer";
console.log("Assalam O Alaikum, 'Welcome to the Al-Taqwa Bank' ATM Services !!!");
let yourbalance = 70000; //Dollar
let yourpin = 2258;

let pinAnswer = await inquirer.prompt([{
    name: "pin",
    message: "Please Enter Your Pin Code",
    type: "number",
}]);

if (pinAnswer.pin == yourpin){

    console.log("Correct Pin Code!!!");  
}   
else {
    console.log("InCorrect Pin Code!!!"); 
} 
  
let accounType = await inquirer.prompt([{
    name: "accountDetail",
    message: "Please Select Account Type",
    type: "list",
    choices:["current", "saving", "default"]
}]);

if(accounType.accountDetail == "current", "Saving", "default"){
    let operationAnwer = await inquirer.prompt([{
        name: "operation",
        message: "Please Select Option",
        type: "list",
        choices:["withdrawal", "checkbalance", "fastwithdrawal"]
    }]);
     
    if(operationAnwer.operation == "withdrawal"){
        let withdrawalAmount = await inquirer.prompt([{
            name: "amount",
            message: "Please enter amount..",
            type: "number",
        }]);
        
        if(withdrawalAmount.amount < yourbalance){
            let withdrawalBalance = yourbalance -= withdrawalAmount.amount
            console.log("Your remaining Balance is " + withdrawalBalance)
        }
        
    if(withdrawalAmount.amount > yourbalance){
        console.log ("Insufficient Balance :(")
            }
        }
            if(operationAnwer.operation == "checkbalance")
            {
             console.log("Your  Balance is ", yourbalance);
            }
    if(operationAnwer.operation == "fastwithdrawal"){
        let fastwithdrawalAmount = await inquirer.prompt([{
        name: "fastwithdrawal",
        message: "Please choose amount..",
        type: "list",
         choices:["2000", "5000", "10000", "15000", "20000"]
                }]);
                let selectAmount = parseInt(fastwithdrawalAmount.fastwithdrawal);
                if(selectAmount> yourbalance){
console.log("Insuffienct Balance :(")
                }
                else{
                    yourbalance -= selectAmount
                    console.log("Your remaining Balance is " + yourbalance)
                }
  
          }
          
}
console.log("JazakAllah for using our ATM Services");

