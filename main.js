let nameCard = document.querySelector(".namecard");

let nameInput = document.querySelector("#textname");

let numberCard = document.querySelector(".numbercard");

let numberInput = document.querySelector("#number1");

let expMonth = document.querySelector(".expmonth");

let expMonthInput = document.querySelector(".type2");

let expYear = document.querySelector(".expyear");

let expYearInput = document.querySelector(".type21");

let cvc = document.querySelector(".cvc");

let cvcInput = document.querySelector(".type3");

let numberError = document.querySelector(".errornumber");

let errorDate = document.querySelector(".errorMM");

let errorYear = document.querySelector(".errorYY");

let errorCvc = document.querySelector(".errorcvc");

let errorName = document.querySelector(".errorname");

let form = document.getElementById("form");

let message = document.getElementById("message");

const button = document.getElementById("button");

let nameValidation = false;

let monthValidation = false;

let yearValidation = false;

let cvcValidation = false;

let Validation = false;

function isComplete() {
  event.preventDefault();
  if (
    nameValidation == true &&
    yearValidation == true &&
    cvcValidation == true &&
    numberValidation == true &&
    monthValidation == true
  ) {
    message.style.display = "block";
    form.style.display = "none";
  }
}

function backto() {
  event.preventDefault();
  message.style.display = "none";
  form.style.display = "block";
}

nameInput.addEventListener("input", () => {
  if (nameInput.value == "") {
    nameCard.innerText = "NAME LASTNAME";
    errorName.innerText = "Can't be blank";
    nameInput.style.borderColor = "red";
    nameValidation = false;
  } else {
    nameCard.innerText = nameInput.value.toUpperCase();
    errorName.innerText = "";
    nameInput.style.borderColor = "black";
    nameValidation = true;
  }
});

numberInput.addEventListener("input", () => {
  numberCard.innerText = numberInput.value.toUpperCase();

  let regExp = /[A-z]/g;

  if (regExp.test(numberInput.value)) {
    numberError.innerText = "wrong format, numbers only";
    numberInput.style.borderColor = "red";
    numberValidation = false;
  } else {
    numberInput.style.borderColor = "Black";
    numberError.innerText = "";
    numberValidation = true;
  }

  if (numberInput.value == "") {
    numberCard.innerText = "0000 0000 0000 0000";
    numberInput.style.borderColor = "Black";
    numberError.innerText = "";
    numberValidation = false;
  }
});

expMonthInput.addEventListener("input", () => {
  let regExp = /[A-z]/g;

  if (expMonthInput.value == "") {
    expMonth.innerText = "MM";
    monthValidation = false;
  } else {
    expMonth.innerText = expMonthInput.value.toUpperCase();
  }

  if (expMonthInput.value > 12) {
    errorDate.innerText = "Error";
    expMonthInput.style.borderColor = "red";
    monthValidation = false;
  } else {
    errorDate.innerText = "";
    expMonthInput.style.borderColor = "black";
    monthValidation = true;
  }

  if (regExp.test(expMonthInput.value)) {
    errorDate.innerText = "Error";
    expMonthInput.style.borderColor = "red";
    monthValidation = false;
  } else {
    errorDate.innerText = "";
    monthValidation = true;
  }
});

expYearInput.addEventListener("input", () => {
  expYear.innerText = expYearInput.value.toUpperCase();

  if (expYearInput.value == "") {
    expYear.innerText = "YY";
    yearValidation = false;
  }

  let regExp1 = /[A-z]/g;

  let regExp2 = /2[0-4]$/;

  if (regExp1.test(expYearInput.value)) {
    errorYear.innerText = "invalid data";
    expYearInput.style.borderColor = "red";
    yearValidation = false;
  } else if (regExp2.test(expYearInput.value)) {
    errorYear.innerText = "invalid data";
    expYearInput.style.borderColor = "red";
    yearValidation = false;
  } else {
    errorYear.innerText = "";
    expYearInput.style.borderColor = "black";
    yearValidation = true;
  }
});

cvcInput.addEventListener("input", () => {
  let regExp = /[A-z]/g;

  if (cvcInput.value == "") {
    cvc.innerText = "000";
    cvcValidation = false;
  } else {
    cvc.innerText = cvcInput.value.toUpperCase();
  }

  if (regExp.test(cvcInput.value)) {
    errorCvc.innerText = "invalid data";
    cvcInput.style.borderColor = "red";
    cvcValidation = false;
  } else {
    errorCvc.innerText = "";
    cvcInput.style.borderColor = "black";
    cvcValidation = true;
  }
});
