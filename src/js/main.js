// select variables
const prevSlideBtn = document.querySelector(".prev");
const nextSlideBtn = document.querySelector(".next");
const pageCircles = document.querySelectorAll(".page");
// select variables from first stage
const inputFirstName = document.getElementById("firstname");
const inputLastName = document.getElementById("lastname");
const inputEmail = document.getElementById("email");
const inputPhoneNumber = document.getElementById("phone");
// select variables from second(skills) stage
const selectSkill = document.getElementById("skills");
const inputExperienceYears = document.getElementById("experience");
const btnAddSkill = document.querySelector(".add-lang-btn");
const boxForAddedSkills = document.querySelector(".added-skills-group");
const addedSkillRow = document.querySelector(".added-skill");
// select variables from third(covid) stage
const radioOffice = document.getElementById("office");
const radioHome = document.getElementById("home");
const radioHybrid = document.getElementById("hybrid");
const radioCovidYes = document.getElementById("covidyes");
const radioCovidNo = document.getElementById("covidno");
const CovidDate = document.getElementById("coviddate");
const radioVaccineYes = document.getElementById("vaccineyes");
const radioVaccineNo = document.getElementById("vaccineno");
const VaccineDate = document.getElementById("vaccinedate");
const questionWork = document.querySelector(".q-1");
const questionHadCovid = document.querySelector(".q-2");
const questionWhenCovid = document.querySelector(".q-3");
const questionVaccinated = document.querySelector(".q-4");
const questionWhenVaccinated = document.querySelector(".q-5");
// select variables from fourth(insights) stage
const radioDevtalksYes = document.getElementById("devtalksyes");
const radioDevtalksNo = document.getElementById("devtalksno");
const textareaSpecial = document.getElementById("devtalk-special");
const textareaAbout = document.getElementById("devtalk-about");
// thanks
const thanksSection = document.querySelector(".thanks");
// end of select variables

// this event checks all validations and changes slider
if (nextSlideBtn) {
  nextSlideBtn.addEventListener("click", () => {
    checkSecondSlider();
    checkThirdCovidStageInputs();
    checkFourthInsightInputs();
    if (
      checkFirstSliderInputs() &&
      checkSecondSlider() &&
      checkFourthInsightInputs()
    ) {
      // console.log("true");
      return true;
    } else {
      // console.log("false");
      return false;
    }
    firstFiveNums = "";
  });
}

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
    console.log(true);
    return true;
  } else {
    console.log(false);
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
if (inputFirstName) {
  inputFirstName.addEventListener("input", () => {
    if (inputFirstName.value.length >= 2) {
      clearError(inputFirstName);
      return true;
    }
  });
}
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
if (inputLastName) {
  inputLastName.addEventListener("input", () => {
    if (inputLastName.value.length >= 2) {
      clearError(inputLastName);
      return true;
    }
  });
}
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
if (inputEmail) {
  inputEmail.addEventListener("input", () => {
    if (validateEmail(inputEmail.value.trim())) {
      clearError(inputEmail);
      return true;
    }
  });
}
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
if (inputPhoneNumber) {
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
}
// check second sliders validations
function checkSecondSlider() {
  checkIfSkillIsAdded();
  if (checkIfSkillIsAdded()) {
    return true;
  } else {
    return false;
  }
}
// this function checks if at least one skill is added
function checkIfSkillIsAdded() {
  if (boxForAddedSkills.firstChild) {
    return true;
  } else {
    inputExperienceYears.nextSibling.nextSibling.classList.remove("hidden");
    inputExperienceYears.classList.add("error-border");
    inputExperienceYears.nextSibling.nextSibling.textContent =
      "*At least one skill must be added";
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
if (selectSkill) {
  fetch("https://bootcamp-2022.devtest.ge/api/skills")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((element) => {
        const skillOption = `
              <option id="${element.title}" value="${element.title}">${element.title}</option>
              `;
        selectSkill.insertAdjacentHTML("afterbegin", skillOption);
      });
    });
}

// add skill after clicking on button
if (btnAddSkill) {
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
}

// function for remove added skill and back it to options list
function undoOptions(el) {
  el.parentElement.remove();
  const undoOption = `
                <option id="${el.parentElement.firstElementChild.innerHTML}" value="${el.parentElement.firstElementChild.innerHTML}">${el.parentElement.firstElementChild.innerHTML}</option>
                `;
  skills.insertAdjacentHTML("afterbegin", undoOption);
}
// check third(covid) stage
function checkThirdCovidStageInputs() {
  checkWork();
  checkIfHadCovid();
  checkDateInput();
  checkIfVaccinated();
  checkVaccineDateInput();
  if (
    checkWork() &&
    checkIfHadCovid() &&
    checkDateInput() &&
    checkIfVaccinated() &&
    checkVaccineDateInput()
  ) {
    return true;
  } else {
    return false;
  }
}
//check how would people prefer to work question
function checkWork() {
  if (radioOffice.checked || radioHome.checked || radioHybrid.checked) {
    if (
      !radioOffice.parentElement.nextSibling.nextSibling.classList.contains(
        "hidden"
      )
    ) {
      radioOffice.parentElement.nextSibling.nextSibling.classList.add("hidden");
      radioHome.parentElement.nextSibling.nextSibling.classList.add("hidden");
      radioHybrid.parentElement.nextSibling.nextSibling.classList.add("hidden");
    }
    return true;
  } else {
    radioOffice.parentElement.nextElementSibling.classList.remove("hidden");
    radioHome.parentElement.nextElementSibling.classList.remove("hidden");
    radioHybrid.parentElement.nextElementSibling.classList.remove("hidden");
    radioOffice.parentElement.nextElementSibling.textContent =
      "*Please answer the question";
    radioHome.parentElement.nextElementSibling.textContent =
      "*Please answer the question";
    radioHybrid.parentElement.nextElementSibling.textContent =
      "*Please answer the question";

    console.log("false");
    return false;
  }
}
//this listeners remove error messages when radio inputs are checked
function removeErrorFromRadioInputs(first, second, third) {
  if (first) {
    first.addEventListener("change", () => {
      if (
        !first.parentElement.nextElementSibling.classList.contains("hidden")
      ) {
        first.parentElement.nextElementSibling.classList.add("hidden");
        second.parentElement.nextElementSibling.classList.add("hidden");
        if (third) {
          third.parentElement.nextElementSibling.classList.add("hidden");
        }
        return true;
      }
    });
  }
}
removeErrorFromRadioInputs(radioOffice, radioHome, radioHybrid);
removeErrorFromRadioInputs(radioHome, radioOffice, radioHybrid);
removeErrorFromRadioInputs(radioHybrid, radioHome, radioOffice);
removeErrorFromRadioInputs(radioCovidYes, radioCovidNo);
removeErrorFromRadioInputs(radioCovidNo, radioCovidYes);
removeErrorFromRadioInputs(radioVaccineYes, radioVaccineNo);
removeErrorFromRadioInputs(radioVaccineNo, radioVaccineYes);
// this listener unhide date inputs if there is checked Yes answers
if (radioCovidYes) {
  radioCovidYes.addEventListener("change", () => {
    if (radioCovidYes.checked) {
      questionWhenCovid.classList.remove("hidden");
      CovidDate.classList.remove("hidden");
    }
  });
}
if (radioCovidNo) {
  radioCovidNo.addEventListener("change", () => {
    if (!questionWhenCovid.classList.contains("hidden")) {
      questionWhenCovid.classList.add("hidden");
      CovidDate.classList.add("hidden");
    }
  });
}
if (radioVaccineYes) {
  radioVaccineYes.addEventListener("change", () => {
    if (radioVaccineYes.checked) {
      questionWhenVaccinated.classList.remove("hidden");
      VaccineDate.classList.remove("hidden");
    }
  });
}
if (radioVaccineNo) {
  radioVaccineNo.addEventListener("change", () => {
    if (!questionWhenVaccinated.classList.contains("hidden")) {
      questionWhenVaccinated.classList.add("hidden");
      VaccineDate.classList.add("hidden");
    }
  });
}
// check if applicant had a covid
function checkIfHadCovid() {
  if (radioCovidYes.checked || radioCovidNo.checked) {
    if (
      !radioCovidYes.parentElement.nextSibling.nextSibling.classList.contains(
        "hidden"
      )
    ) {
      radioCovidNo.parentElement.nextSibling.nextSibling.classList.add(
        "hidden"
      );
      radioCovidYes.parentElement.nextSibling.nextSibling.classList.add(
        "hidden"
      );
      return true;
    }
  } else {
    radioCovidNo.parentElement.nextElementSibling.classList.remove("hidden");
    radioCovidYes.parentElement.nextElementSibling.classList.remove("hidden");
    radioCovidYes.parentElement.nextElementSibling.textContent =
      "*Please answer the question";
    radioCovidNo.parentElement.nextElementSibling.textContent =
      "*Please answer the question";
    return false;
  }
}
function checkDateInput() {
  if (
    !questionWhenCovid.classList.contains("hidden") &&
    CovidDate.value == ""
  ) {
    CovidDate.classList.add("error-border");
    CovidDate.nextElementSibling.classList.remove("hidden");
    CovidDate.nextElementSibling.textContent = "*Select date, please";
    return false;
  }
}
if (CovidDate) {
  CovidDate.addEventListener("input", () => {
    if (CovidDate.value !== "") {
      CovidDate.classList.remove("error-border");
      CovidDate.nextElementSibling.classList.add("hidden");
      return true;
    }
  });
}
// check if applicant is vaccinated
function checkIfVaccinated() {
  if (radioVaccineYes.checked || radioVaccineNo.checked) {
    if (
      !radioVaccineYes.parentElement.nextSibling.nextSibling.classList.contains(
        "hidden"
      )
    ) {
      radioVaccineNo.parentElement.nextSibling.nextSibling.classList.add(
        "hidden"
      );
      radioVaccineYes.parentElement.nextSibling.nextSibling.classList.add(
        "hidden"
      );
      return true;
    }
  } else {
    radioVaccineNo.parentElement.nextElementSibling.classList.remove("hidden");
    radioVaccineYes.parentElement.nextElementSibling.classList.remove("hidden");
    radioVaccineYes.parentElement.nextElementSibling.textContent =
      "*Please answer the question";
    radioVaccineNo.parentElement.nextElementSibling.textContent =
      "*Please answer the question";
    return false;
  }
}
function checkVaccineDateInput() {
  if (
    !questionWhenVaccinated.classList.contains("hidden") &&
    VaccineDate.value == ""
  ) {
    VaccineDate.classList.add("error-border");
    VaccineDate.nextElementSibling.classList.remove("hidden");
    VaccineDate.nextElementSibling.textContent = "*Select date, please";
    return false;
  }
}
if (VaccineDate) {
  VaccineDate.addEventListener("input", () => {
    if (VaccineDate.value !== "") {
      VaccineDate.classList.remove("error-border");
      VaccineDate.nextElementSibling.classList.add("hidden");
      return true;
    }
  });
}
// check all validations on fourth(insights) stage
function checkFourthInsightInputs() {
  checkDevtalksRadio();
  checkTextareas(textareaAbout);
  checkTextareas(textareaSpecial);
  if (
    checkDevtalksRadio() &&
    checkTextareas(textareaAbout) &&
    checkTextareas(textareaSpecial)
  ) {
    return true;
  } else {
    return false;
  }
}
// check Devtalks radio input
function checkDevtalksRadio() {
  if (radioDevtalksYes.checked || radioDevtalksNo.checked) {
    if (
      !radioDevtalksYes.parentElement.nextSibling.nextSibling.classList.contains(
        "hidden"
      )
    ) {
      radioDevtalksNo.parentElement.nextSibling.nextSibling.classList.add(
        "hidden"
      );
      radioDevtalksYes.parentElement.nextSibling.nextSibling.classList.add(
        "hidden"
      );
      return true;
    }
  } else {
    radioDevtalksNo.parentElement.nextElementSibling.classList.remove("hidden");
    radioDevtalksYes.parentElement.nextElementSibling.classList.remove(
      "hidden"
    );
    radioDevtalksYes.parentElement.nextElementSibling.textContent =
      "*Please answer the question";
    radioDevtalksNo.parentElement.nextElementSibling.textContent =
      "*Please answer the question";
    return false;
  }
}
// clear validation errors when each input is checked
removeErrorFromRadioInputs(radioDevtalksYes, radioDevtalksNo);
removeErrorFromRadioInputs(radioDevtalksNo, radioDevtalksYes);
// check textarea validations
function checkTextareas(el) {
  if (el.value == "") {
    el.nextElementSibling.classList.remove("hidden");
    el.nextElementSibling.textContent = "*Fill this form please";
    el.classList.add("error-border");
    return false;
  }
}
// listen textareas and clear if its filled
if (textareaAbout) {
  textareaAbout.addEventListener("input", () => {
    if (textareaAbout.value !== "") {
      textareaAbout.nextElementSibling.classList.add("hidden");
      textareaAbout.classList.remove("error-border");
      return true;
    }
  });
}
if (textareaSpecial) {
  textareaSpecial.addEventListener("input", () => {
    if (textareaSpecial.value !== "") {
      textareaSpecial.nextElementSibling.classList.add("hidden");
      textareaSpecial.classList.remove("error-border");
      return true;
    }
  });
}
// redirect success page
if (thanksSection) {
  setTimeout(function () {
    window.location.href = "/index.html";
  }, 5000);
}
