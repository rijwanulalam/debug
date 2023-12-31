const calculateExpense = () => {
  const income = document.querySelector("#income").value;
  const food = document.querySelector("#food").value;
  const rent = document.querySelector("#rent").value;
  const clothes = document.querySelector("#clothes").value;
  // console.log(typeof parseInt(income))
  if (
    income < 0 ||
    income == "" ||
    food < 0 ||
    food == "" ||
    rent < 0 ||
    rent == "" ||
    clothes < 0 ||
    clothes == ""
  ) {
    alert("Inputs must be a positive numbers");
    return;
  }
  // calculate expense
  const expense =
    parseInt(food) + parseInt(rent) + parseInt(clothes);
    console.log(expense)
  // calculate balance
  const balance = parseInt(income) - expense;
  //   validate income
  if (expense > parseInt(income)) {
    alert("Expenses cannot be more than income");
  } else {
    // view total expense and balance
    document.getElementById("total-expense").innerText = expense;
    document.getElementById("balance").innerText = balance;
  }
};

const calculateSavings = () => {
  // calculate saving amount
  const income = document.querySelector("#income").value;
  const savePercentage = document.getElementById("save").value;
  //   Validate saving percentage value
  if (savePercentage < 0) {
    alert("Provide positive saving value");
    return;
  }
  const balance = document.getElementById("balance").innerText;
  const savingAmount = (parseInt(savePercentage) / 100) * income;
  // calculate remaining balance
  const remainingBalance = balance - savingAmount;
  
  
  //   validate saving amount
  if (savingAmount > balance) {
    alert("SavingAmount is greater than balance");
  } else {
    // view saving amount and remaining balance
    document.getElementById("saving-amount").innerText = savingAmount.toFixed(2);
    // document.getElementById("remaining-balance").innerText = remainingBalance;
    document.getElementById("remaining-balance").innerText = remainingBalance.toFixed(2);
  }
};
