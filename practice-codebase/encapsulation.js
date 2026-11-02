// class Student{// encapsulated class ( providing data security) 
//     //to create a private field we use "#"
//     #studentId="101";
//     #studentName= "Pratishtha";

//     getDisplay()
//     {
//         this.#studentId=102;// to give edit access
//         console.log("StudentId:-"+this.#studentId)// to give only viewing access
//     }


// class  Bank{ 
//     #balance=5000;
//     //deposit
//     deposit(amount)
//     {
//         if (amount>0){
//             this.#balance+=amount;
//             console.log("Balance is:- "+this.#balance);
//         }
//         else{
//             alert("Please enter valid amount");
//         }
//     }


//     //withdraw
//     withdraw(amount)
//     {
//         if (amount>0 && amount<=this.#balance){
//             this.#balance-=amount;
//             console.log("Balance is:- "+this.#balance);
//         }
//         else{
//             alert("Innsufficient balance");

//         }
//     }

//     //getBalance
//     getBalance()
//     {
//         console.log("Balance is:- "+this.#balance);
//     }


// }
// const bank= new Bank();
// // bank.deposit(1000);
// // bank.withdraw(500);
// // bank.getBalance();
// let choice;
// do{
//     choice=Number(prompt(
//         "1.Bank Deposit\n"+
//         "2.Bank Withdraw\n"+
//         "3.Get Balance\n"+
//         "4.Exit\n"+
//         "Enter your choice:"
//     ));
//     switch(choice)
//     {
//         case 1:
//             let depositAmount=Number(prompt("Enter amount to deposit:"));
//             bank.deposit(depositAmount);
//             break;
//         case 2:
//             let withdrawAmount=Number(prompt("Enter amount to withdraw:"));
//             bank.withdraw(withdrawAmount);
//             break;
//     }
// } while(choice!=4);


const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ask(question) {
    return new Promise(resolve => {
        rl.question(question, resolve);
    });
}

class Bank {
    #balance = 5000;

    // Deposit
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log("Balance is:- " + this.#balance);
        }
        else {
            console.log("Please enter valid amount");
        }
    }

    // Withdraw
    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log("Balance is:- " + this.#balance);
        }
        else {
            console.log("Insufficient balance");
        }
    }

    // Get Balance
    getBalance() {
        console.log("Balance is:- " + this.#balance);
    }
}

const bank = new Bank();

async function main() {
    let choice;

    do {
        choice = Number(await ask("----------SBI Bank----------"+
            "\n1. Bank Deposit\n" +
            "2. Bank Withdraw\n" +
            "3. Get Balance\n" +
            "4. Exit\n" + 
            "----------------------------\n" +
            "Enter your choice: "
        ));

        switch (choice) {
            case 1: {
                let depositAmount = Number(
                    await ask("Enter amount to deposit: ")
                );
                bank.deposit(depositAmount);
                break;
            }

            case 2: {
                let withdrawAmount = Number(
                    await ask("Enter amount to withdraw: ")
                );
                bank.withdraw(withdrawAmount);
                break;
            }

            case 3:
                bank.getBalance();
                break;

            case 4:
                console.log("Thank you for using our bank!");
                break;

            default:
                console.log("Invalid choice!");
        }

    } while (choice !== 4);

    rl.close();
}

main();