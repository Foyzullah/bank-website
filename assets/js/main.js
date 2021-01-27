//Login Button Handler
const loginBtn = document.getElementById("login-btn");
const loginArea = document.getElementById("login-area");
const accountInfoArea = document.getElementById("account-info-area");
loginBtn.addEventListener("click", function () {
  loginArea.style.display = "none";
  accountInfoArea.style.display = "block";
});

//Deposit Button Handler

const depositBtn = document.getElementById("deposit-btn");
depositBtn.addEventListener("click", function () {
  const depositNumber = getInputNum("deposit-amount");

  updateInnerText("old-deposit", depositNumber);
  updateInnerText("old-balance", depositNumber);
  document.getElementById("deposit-amount").value = "";
  // For Balance
});
const withdrawBtn = document.getElementById("withdraw-btn");
withdrawBtn.addEventListener("click", function () {
  const withdrawNum = getInputNum("withdraw-amount");
  updateInnerText("old-withdraw", withdrawNum);
  updateInnerText("old-balance", -1 * withdrawNum);

  document.getElementById("withdraw-amount").value = "";
});

function getInputNum(id) {
  const Amount = document.getElementById(id).value;
  const amountNum = parseFloat(Amount);
  return amountNum;
}

function updateInnerText(id, addedNumber) {
  const oldValue = document.getElementById(id).innerText;
  const oldNumber = parseFloat(oldValue);
  const totalAmount = oldNumber + addedNumber;
  document.getElementById(id).innerText = totalAmount;
}
