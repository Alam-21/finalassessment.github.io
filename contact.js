const form = document.getElementById("form");
const submit = document.querySelector("#submit");
const err = document.querySelector(".err");

const checkoccupation = () => {
  let occupation = document.querySelector("#occupation").value;

  let valid = false;
  const re = /^[a-zA-Z]+$/i;
  valid = re.test(occupation);
  return occupation ? valid : true;
};

const checkcompany = () => {
  let company = document.querySelector("#company").value;

  let valid = false;

  const re = /[a-zA-Z0-9]+/;
  valid = re.test(company);

  return company ? valid : true;
};

const checkPhone = () => {
  let phone = document.querySelector("#phone").value;

  let valid = false;

  const re = /[0-9]{3}-[0-9]{3}-[0-9]{4}/i;
  valid = re.test(phone);

  return phone ? valid : true;
};

const showError = (message) => {
  err.innerHTML = err.innerHTML + "<br>" + message;
};

const showSuccess = () => {
  err.innerHTML = "";
};

function resetBorder() {
  document
    .querySelectorAll("input")
    .forEach((doc) => (doc.style.border = "none"));
}

function val(e) {
  showSuccess();
  resetBorder();
  let occupationvalid = checkoccupation(),
    companyValid = checkcompany(),
    phoneValid = checkPhone();
  console.log(occupationvalid, companyValid, phoneValid);
  let isFormValid = occupationvalid && phoneValid && companyValid;

  if (isFormValid) {
    showSuccess();
    console.log("success");
    return true;
  } else {
    showSuccess();
    e.preventDefault();

    if (!phoneValid) {
      document.querySelector(".phone").style.border =
        "2px hsl(0, 50%, 50%) solid";
      showError("invalid Phone No");
    }
    if (!companyValid) {
      document.querySelector(".company").style.border =
        "2px hsl(0, 50%, 50%) solid";
      showError("invalid company");
    }
    if (!occupationvalid) {
      document.querySelector(".occupation").style.border =
        "2px hsl(0, 50%, 50%) solid";
      showError("invalid occupation code");
    }
  }
}

form.addEventListener("submit", (e) => val(e));

function reset() {
  showSuccess();
}
