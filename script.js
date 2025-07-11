// get values from index.html
const passwordLengthOut = document.getElementById("lengthOut");
const lengthSetter = document.getElementById("lengthSetter");
const numOfPasswords = document.getElementById("numOfPasswords");
const result = document.getElementById("result");
const create = document.getElementById("create");
const useSymbols = document.getElementById("symbols");
const useNumbers = document.getElementById("numbers");

// update password length by moving slider(range)
passwordLengthOut.textContent = lengthSetter.value;
lengthSetter.addEventListener("input", (event) => {
  passwordLengthOut.textContent = event.target.value;
});

// characters allowed in passwords. Yes, we use the eñe.
const letters = "abcdefghijklmnñoprqstuvwxyzABCDEFGHIJKLMNÑOPRQSTUVWXYZ";
const symbols = "!@#$%&*()_+=-[]{};:'.,<>\"";
const numbers = "0123456789";

const generatePassword = (length) => {
  let characters = letters;
  if (useSymbols.checked) {
    characters += symbols;
  }
  if (useNumbers.checked) {
    characters += numbers;
  }
  const numOfCharacters = characters.length;
  let password= "";
  for (let i = 0; i < length; i++) {
    password += characters[Math.floor(Math.random() * numOfCharacters)];
  }
  return password;
}

const removePasswords = () => {
  result.innerHTML = "";
}

const copyOnclick = (text) => {
  navigator.clipboard.writeText(text);
  window.alert("copied password to clipboard");
}

function printPasswords(event) {
  if (!numOfPasswords.checkValidity()) {
    window.alert("number of passwords out of range");
    return ;
  }
  totalPasswords = numOfPasswords.value;
  length = lengthSetter.value;
  for (let i = 0; i < totalPasswords; i++) {
    currentPassword = document.createElement("p");
    currentPassword.classList.add("password");
    currentPassword.textContent = generatePassword(length);
    currentPassword.addEventListener("click", (event) => {
      console.log(event.target.textContent);
      copyOnclick(event.target.textContent);
    });
    result.appendChild(currentPassword);
  }
}

create.addEventListener("click", (event) => {
  removePasswords();
  printPasswords(event);
});
