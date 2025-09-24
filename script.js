function calculateLoan() {
  loanAmountValue = document.getElementById("loan-amount").value;

  interestRateValue = document.getElementById("interest-rate").value;

  MonthsToPayValue = document.getElementById("months-to-pay").value;

  interest = (loanAmountValue * (interestRateValue * 0.01)) / MonthsToPayValue;

  monthlyPayment = loanAmountValue / MonthsToPayValue + interest;

  // document.getElementById(
  //   "payment"
  // ).innerHTML = `Monthly Payment: ${monthlyPayment.toFixed(2)}`;

  const btnEl = document.querySelector(".btn");
  btnEl.addEventListener("click", () => {
    alert(`Your Monthly Payment is ${monthlyPayment.toFixed(2)}`);
    alert("All done dawg");
  });
}
