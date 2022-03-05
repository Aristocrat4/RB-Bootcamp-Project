// select variables
const prevSlideBtn = document.querySelector(".prev");
const nextSlideBtn = document.querySelector(".next");
const pageCircles = document.querySelectorAll(".page");
// select variables from first stage
const inputFirstName = document.getElementById("firstname");
const inputLastName = document.getElementById("lastname");
const inputEmail = document.getElementById("email");
const inputPhoneNumber = document.getElementById("phone");
// select variables from second stage
const selectSkill = document.getElementById("skills");
const inputExperienceYears = document.getElementById("experience");
const btnAddSkill = document.querySelector(".add-lang-btn");
const boxForAddedSkills = document.querySelector(".added-skills-group");
const addedSkillRow = document.querySelector(".added-skill");
// end of select variables

// this event checks all validations and changes slider
nextSlideBtn.addEventListener("click", () => {
  checkSecondSlider();
  if (checkFirstSliderInputs() && checkSecondSlider()) {
    // return true;
    console.log("true");
  } else {
    // return false;
    console.log("false");
  }
  firstFiveNums = "";
});

// this function checks validations for each required input
function checkFirstSliderInputs() {
  checkFirstNameInput();
  checkLastNameInput();
  checkEmailInput();
  checkPhoneNumberInput();
  if (
    checkFirstNameInput() &&
    checkLastNameInput() &&
    checkEmailInput() &&
    checkPhoneNumberInput()
  ) {
    return true;
  } else {
    return false;
  }
}

// this function checks validation of first name input
function checkFirstNameInput() {
  if (inputFirstName.value.length >= 2) {
    clearError(inputFirstName);
    return true;
  } else {
    setError(inputFirstName, "*First name is required");
    return false;
  }
}
// this event is listening to first name input and removing error if its ok
inputFirstName.addEventListener("input", () => {
  if (inputFirstName.value.length >= 2) {
    clearError(inputFirstName);
    return true;
  }
});
// this function checks validation of last name input
function checkLastNameInput() {
  if (inputLastName.value.length >= 2) {
    clearError(inputLastName);
    return true;
  } else {
    setError(inputLastName, "*Last name is required");
    return false;
  }
}
// this event is listening to last name input and removing error if its ok
inputLastName.addEventListener("input", () => {
  if (inputLastName.value.length >= 2) {
    clearError(inputLastName);
    return true;
  }
});
// check if email is valid
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
//this function is checking validation of email
function checkEmailInput() {
  const emailValue = inputEmail.value.trim();
  if (emailValue === "") {
    setError(inputEmail, "*Email is required");
    return false;
  } else {
    if (!validateEmail(inputEmail.value.trim())) {
      setError(inputEmail, "*Email is not valid");
      return false;
    } else {
      clearError(inputEmail);
      return true;
    }
  }
}
// listen email input and remove error if email is valid
inputEmail.addEventListener("input", () => {
  if (validateEmail(inputEmail.value.trim())) {
    clearError(inputEmail);
    return true;
  }
});
// this function check if phone number validation is ok
function checkPhoneNumberInput() {
  if (inputPhoneNumber.value == "") {
    clearError(inputPhoneNumber);
    return true;
  } else {
    let numberToString = inputPhoneNumber.value.toString();
    const firstFourDigits = numberToString.slice(0, 5);
    if (firstFourDigits !== "+9955") {
      setError(inputPhoneNumber, "*Number must be started with country code");
      inputPhoneNumber.value = "";
      phoneValue = "";
      firstFiveDigits = "";
      return false;
    } else if (numberToString.length !== 13) {
      setError(inputPhoneNumber, "*Number is not valid");
      inputPhoneNumber.value = "";
      phoneValue = "";
      firstFiveDigits = "";
      return false;
    } else {
      clearError(inputPhoneNumber);
      return true;
    }
  }
}
// listening phone number input to remove error if it exists
let collectNums = "";
let firstFiveNums = "";
inputPhoneNumber.addEventListener("input", (e) => {
  firstFiveNums = firstFiveNums.replace(/\s/g, "");
  if (inputPhoneNumber.value.replace(/\s/g, "").length == 5) {
    firstFiveNums = inputPhoneNumber.value.replace(/\s/g, "");
  }

  console.log(firstFiveNums);
  if (
    firstFiveNums == "+9955" &&
    inputPhoneNumber.value.replace(/\s/g, "").length == 13
  ) {
    clearError(inputPhoneNumber);
    return true;
  }
});
// check second sliders validations
function checkSecondSlider() {
  checkIfSkillIsAdded();
  if (checkIfSkillIsAdded()) {
    console.log("true");
    return true;
  } else {
    console.log("false");
    return false;
  }
}
// this function checks if at least one skill is added
function checkIfSkillIsAdded() {
  if (boxForAddedSkills.firstChild) {
    console.log("true");
    return true;
  } else {
    inputExperienceYears.nextSibling.nextSibling.classList.remove("hidden");
    inputExperienceYears.classList.add("error-border");
    inputExperienceYears.nextSibling.nextSibling.textContent =
      "*At least one skill must be added";
    console.log("false");
    return false;
  }
}
// this function sets error message up on input
function setError(input, message) {
  input.nextSibling.nextSibling.textContent = `${message}`;
  input.classList.add("error-border");
  input.nextSibling.nextSibling.classList.remove("hidden");
}
// this function removes error message from input
function clearError(input) {
  input.nextSibling.nextSibling.textContent = "";
  if (input.classList.contains("error-border")) {
    input.classList.remove("error-border");
  }
}

// fetch skills and add options inside select input
fetch("https://bootcamp-2022.devtest.ge/api/skills")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((element) => {
      const skillOption = `
          <option id="${element.title}" value="${element.title}">${element.title}</option>
          `;
      skills.insertAdjacentHTML("afterbegin", skillOption);
    });
  });

// add skill after clicking on button
btnAddSkill.addEventListener("click", (e) => {
  const addedSkillRow = `
                      <div class="added-skill">
                          <span class="lang">${skills.value}</span>
                          <span class="experience-years">Years of Experience: ${inputExperienceYears.value}</span>
                          <img
                            class="remove-skill"
                            src="../../assets/images/Remove.png"
                            alt="remove" onclick="undoOptions(this)" 
                          />
                        </div>
            `;
  if (inputExperienceYears.value && skills.value) {
    boxForAddedSkills.insertAdjacentHTML("afterbegin", addedSkillRow);
    const selectedOption = document.getElementById(`${skills.value}`);
    selectedOption.remove();
  }
  if (inputExperienceYears.classList.contains("error-border")) {
    inputExperienceYears.classList.remove("error-border");
    inputExperienceYears.nextSibling.nextSibling.classList.add("hidden");
  }
});

// function for remove added skill and back it to options list
function undoOptions(el) {
  el.parentElement.remove();
  const undoOption = `
                <option id="${el.parentElement.firstElementChild.innerHTML}" value="${el.parentElement.firstElementChild.innerHTML}">${el.parentElement.firstElementChild.innerHTML}</option>
                `;
  skills.insertAdjacentHTML("afterbegin", undoOption);
}
