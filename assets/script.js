const userInputTxt = document.querySelector(".input-button input");
const checkBtn = document.querySelector(".input-button button");
const infoTxt = document.querySelector(".info-text");

let filterInput;
checkBtn.addEventListener("click", () => {
  let reverseInput = filterInput.split("").reverse().join("");
  infoTxt.classList.add("active");
  if (filterInput != reverseInput) {
    return (infoTxt.innerHTML = `No, <span>'${userInputTxt.value}'</span> isn't a palindrome!`);
  } else {
    return (infoTxt.innerHTML = `Yes, <span>'${userInputTxt.value}'</span> is a palindrome!`);
  }
});

userInputTxt.addEventListener("keyup", () => {
  filterInput = userInputTxt.value.replace(/[^A-Z0-9]/gi, "");
  if (filterInput) {
    return checkBtn.classList.add("active");
  }
  checkBtn.classList.remove("active");
  infoTxt.classList.remove("active");
});
