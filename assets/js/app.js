(function init() {
  var currentAmount = 5000;
  var currentAccountNumber = 1001;

  let userSelectedOption = prompt(
    "Enter your selected operation. \n W for Withdrawal \n D for Deposit \n T for Transfer \n B for Balance"
  );
  switch (userSelectedOption) {
    case "W":
      withdraw(currentAmount, currentAccountNumber);
      break;
    case "D":
      deposit(currentAmount, currentAccountNumber);
      break;
    case "T":
      transfer(currentAmount, currentAccountNumber);
      break;
    case "B":
      checkBalance(currentAmount, currentAccountNumber);
      break;
  }
})();

// Withdrawal Function
function withdraw(currentAmount, currentAccountNumber) {
  let amountToWithdraw = prompt("Enter amount to withdraw");

  if (amountToWithdraw <= 25) {
    console.log("Withdrawal amount must exceed 25 Birr");
  } else if (amountToWithdraw > 0.75 * currentAmount) {
    console.log("Withdrawal amount can not exceed 75% of deposited amount");
  } else {
    currentAmount -= amountToWithdraw;
    console.log(
      `Amount ${amountToWithdraw} has been with drawn from account number ${currentAccountNumber}. Current Amount : ${currentAmount}`
    );
  }
}

// Deposit Function
function deposit(currentAmount, currentAccountNumber) {
  let amountToDeposit = prompt("Enter amount to Deposit");
  currentAmount += Number(amountToDeposit);
  console.log(
    `Amount ${amountToDeposit} has been deposited to account number ${currentAccountNumber}. Current Amount : ${currentAmount}`
  );
}

// Transfer Function
function transfer(currentAmount, currentAccountNumber) {
  let amountToTransfer = prompt("Enter amount to Transfer");
  let accountToTransfer = prompt("Enter account to transfer to");

  if (amountToTransfer <= 25) {
    console.log("Transfer amount must exceed 25 Birr");
  } else if (amountToTransfer > 0.75 * currentAmount) {
    console.log("Transfer amount can not exceed 75% of deposited amount");
  } else {
    currentAmount -= amountToTransfer;
    console.log(
      `Amount ${amountToTransfer} has been transferred to account number ${accountToTransfer} from account ${currentAccountNumber}. Current Amount : ${currentAmount}`
    );
  }
}

// Check Balance
function checkBalance(currentAmount, currentAccountNumber) {
  console.log(
    `Current amount for account number ${currentAccountNumber} is ${currentAmount}. Current Amount : ${currentAmount}`
  );
}
