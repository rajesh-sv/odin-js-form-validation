const emailInput = document.getElementById("email");
const emailMessage = document.querySelector("#email + .message");
const countryInput = document.getElementById("country");
const zipInput = document.getElementById("zip-code");
const zipMessage = document.querySelector("#zip-code + .message");
const passwordInput = document.getElementById("password");
const passwordMessage = document.querySelector("#password + .message");
const confirmPasswordInput = document.getElementById("confirm-password");
const confirmPasswordMessage = document.querySelector(
  "#confirm-password + .message"
);

emailInput.addEventListener("focus", () => {
  emailMessage.classList.remove("hidden");
});

emailInput.addEventListener("blur", () => {
  emailMessage.classList.add("hidden");

  if (emailInput.validity.valid) {
    emailInput.classList.add("valid");
    emailInput.classList.remove("invalid");
  } else {
    emailInput.classList.add("invalid");
    emailInput.classList.remove("valid");
  }
});

countryInput.addEventListener("change", () => {
  let zipValid = true;
  if (
    (zipInput.value.length === 6 && countryInput.value === "india") ||
    (zipInput.value.length === 5 && countryInput.value === "france") ||
    (zipInput.value.length === 4 && countryInput.value === "germany")
  ) {
    const zip = Number(zipInput.value);
    if (isNaN(zip) || !isFinite(zip)) zipValid = false;
  } else {
    zipValid = false;
  }

  if (zipValid) {
    zipInput.classList.add("valid");
    zipInput.classList.remove("invalid");
  } else {
    zipInput.classList.add("invalid");
    zipInput.classList.remove("valid");
  }
});

zipInput.addEventListener("focus", () => {
  zipMessage.classList.remove("hidden");
});

zipInput.addEventListener("blur", () => {
  zipMessage.classList.add("hidden");

  let zipValid = true;
  if (
    (zipInput.value.length === 6 && countryInput.value === "india") ||
    (zipInput.value.length === 5 && countryInput.value === "france") ||
    (zipInput.value.length === 4 && countryInput.value === "germany")
  ) {
    const zip = Number(zipInput.value);
    if (isNaN(zip) || !isFinite(zip)) zipValid = false;
  } else {
    zipValid = false;
  }

  if (zipValid) {
    zipInput.classList.add("valid");
    zipInput.classList.remove("invalid");
  } else {
    zipInput.classList.add("invalid");
    zipInput.classList.remove("valid");
  }
});

passwordInput.addEventListener("focus", () => {
  passwordMessage.classList.remove("hidden");
});

passwordInput.addEventListener("blur", () => {
  passwordMessage.classList.add("hidden");

  if (passCheckPass()) {
    passwordInput.classList.add("valid");
    passwordInput.classList.remove("invalid");
    confirmPasswordInput.classList.add("valid");
    confirmPasswordInput.classList.remove("invalid");
  } else {
    passwordInput.classList.add("invalid");
    passwordInput.classList.remove("valid");
    confirmPasswordInput.classList.add("invalid");
    confirmPasswordInput.classList.remove("valid");
  }
});

confirmPasswordInput.addEventListener("focus", () => {
  confirmPasswordMessage.classList.remove("hidden");
});

confirmPasswordInput.addEventListener("blur", () => {
  confirmPasswordMessage.classList.add("hidden");

  if (passCheckPass()) {
    passwordInput.classList.add("valid");
    passwordInput.classList.remove("invalid");
    confirmPasswordInput.classList.add("valid");
    confirmPasswordInput.classList.remove("invalid");
  } else {
    passwordInput.classList.add("invalid");
    passwordInput.classList.remove("valid");
    confirmPasswordInput.classList.add("invalid");
    confirmPasswordInput.classList.remove("valid");
  }
});

function passCheckPass() {
  let digits = 0,
    chars = 0,
    n = passwordInput.value.length;
  for (const c of passwordInput.value) {
    if ("0" <= c && c <= "9") {
      digits++;
    } else if (("a" <= c && c <= "z") || ("A" <= c && c <= "Z")) {
      chars++;
    }
  }

  return (
    n >= 8 &&
    digits > 0 &&
    n > chars + digits &&
    passwordInput.value === confirmPasswordInput.value
  );
}
