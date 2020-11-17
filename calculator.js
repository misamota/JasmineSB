window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {

  document.getElementById("loan-amount").value = 200000;
  document.getElementById("loan-years").value = 30;
  document.getElementById("loan-rate").value = 3.12;
  let loanAmount = document.getElementById("loan-amount").value;
  let years = document.getElementById("loan-years").value;
  let rate = document.getElementById("loan-rate").value;
  document.getElementById("monthly-payment").innerHTML = "$" + calculateMonthlyPayment(loanAmount,rate,years);
  
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  loanAmount = document.getElementById("loan-amount").value;
  years = document.getElementById("loan-years").value;
  rate = document.getElementById("loan-rate").value;
  updateMonthly(calculateMonthlyPayment(loanAmount,rate,years));

}

function calculateMonthlyPayment(p,i,n) {
 i = (i/100)/12;
 n = n * 12;
 //let payment = (p*i) / (1-Math.pow(1+i),~n); -can you tell me why this doesn't work?
 var x = Math.pow(1 + i, n);
 var monthly = (p*x*i)/(x-1);
 console.log(monthly);
return monthly.toFixed(2);

}

function updateMonthly(monthly) {
  document.getElementById("monthly-payment").innerHTML = monthly
}
