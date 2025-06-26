const passwordLengthOut = document.getElementById("lengthOut");
const lengthSetter = document.getElementById("lengthSetter");
passwordLengthOut.textContent = lengthSetter.value;

lengthSetter.addEventListener("input", (event) => {
  passwordLengthOut.textContent = event.target.value;
});
