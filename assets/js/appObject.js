let user1 = {
  fullName: "A",
  accountNumber: "1",
  accountPin: "1",
  phoneNumber: "",
  currentBalance: 3000,
  recentActivity: [],

  widthDraw: function (amountToWithdraw) {
    if (amountToWithdraw <= 25) {
      console.log("Amount to withdraw must exceed 25 birr.");
    } else if (amountToWithdraw >= 0.75 * this.currentBalance) {
      console.log("Amount to withdraw can not exceed 90% of current balance");
    } else {
      this.currentBalance -= amountToWithdraw;
      this.recentActivity.push(`- ${amountToWithdraw}`);
      console.log(
        `Amount ${amountToWithdraw} has been successfully withdrawn from account number ${this.accountNumber} \n Current Balance is ${this.currentBalance}`
      );
    }
  },

  deposit: function (amountToDeposit) {
    this.currentBalance += Number(amountToDeposit);
    this.recentActivity.push(`+ ${amountToDeposit}`);
    console.log(
      `Amount ${amountToDeposit} has been successfully deposited to account number ${this.accountNumber} \n Current Balance is ${this.currentBalance}`
    );
  },

  checkBalance: function () {
    console.log(`Your Current Balance is ${this.currentBalance}`);
  },

  transfer: function (amountToTransfer, accountToTransferTo) {
    this.recentActivity.push(
      `- ${amountToTransfer} Transfer to ${accountToTransferTo}`
    );
    this.currentBalance -= amountToTransfer;
    console.log(
      `Amount ${amountToTransfer} has been successfully transferred to account number ${accountToTransferTo} from ${this.accountNumber}. \n Your current balance is ${this.currentBalance}`
    );
  },
};

// User authentication
function authenticateUser(fullName, accountNumber, accountPin) {
  if (fullName == user1.fullName) {
    if (
      accountNumber == user1.accountNumber &&
      accountPin == user1.accountPin
    ) {
      return user1;
    } else {
      return "Invalid Credentials";
    }
  } else {
    return "Seems like you are not a user of our bank";
  }
}

// Init Function
var go = true;
while (go) {
  (function init() {
    let fullName = prompt("Enter your  Full Name");
    let accountNumber = prompt("Enter your Account Number");
    let accountPin = prompt("Enter your Account Pin");

    let userData = authenticateUser(fullName, accountNumber, accountPin);
    if (
      userData == "Invalid Credentials" ||
      userData == "Seems like you are not a user of our bank"
    ) {
      console.log(userData);
    } else {
      let userSelectedOption = prompt(
        "Enter your selected operation. \n W for Withdrawal \n D for Deposit \n T for Transfer \n B for Balance \n Any other input to exit"
      );

      if (userSelectedOption == "W") {
        let amountToWithdraw = prompt("Enter amount to withdraw");
        userData.widthDraw(amountToWithdraw);
      } else if (userSelectedOption == "D") {
        let amountToDeposit = prompt("Enter amount to Deposit");
        userData.deposit(amountToDeposit);
      } else if (userSelectedOption == "T") {
        console.log("Transfer");
      } else if (userSelectedOption == "B") {
        userData.checkBalance();
      } else {
        console.log("Thank you. Exiting...");
        go = false;
      }
    }
  })();
}
