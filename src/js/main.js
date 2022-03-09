// select variables
// form
const formFull = document.querySelector(".personal-information");
const btnSubmit = document.querySelector(".submit");
const skillsArray = [];
// pagination
const prevSlideBtn = document.querySelector(".prev");
const nextSlideBtn = document.querySelector(".next");
const pageCircles = document.querySelectorAll(".page");
const pageCirclesArr = Array.from(pageCircles);
const groupLefts = document.querySelectorAll(".grouped-left");
const groupRights = document.querySelectorAll(".personal-right-inner");
const submitPage = document.querySelector(".submit-page");
const backFromSubmit = document.querySelector(".goback");
// select pagination circles
const circle1 = document.querySelector(".circle-1");
const circle2 = document.querySelector(".circle-2");
const circle3 = document.querySelector(".circle-3");
const circle4 = document.querySelector(".circle-4");
const circle5 = document.querySelector(".circle-5");
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
const experienceYears = document.querySelectorAll(".experience-years");
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
const questionDevtalksAbout = document.querySelector(".q-6");
// select variables from fourth(insights) stage
const radioDevtalksYes = document.getElementById("devtalksyes");
const radioDevtalksNo = document.getElementById("devtalksno");
const textareaSpecial = document.getElementById("devtalk-special");
const textareaAbout = document.getElementById("devtalk-about");
// thanks
const thanksSection = document.querySelector(".thanks");
// end of select variables

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
    if (
      firstFiveNums == "+9955" &&
      inputPhoneNumber.value.replace(/\s/g, "").length == 13
    ) {
      clearError(inputPhoneNumber);
      return inputPhoneNumber.value.replace(/\s/g, "");
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

// fetch get skills and add options inside select input
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
// unhide submitted applications content on click red rectangle
if (document.querySelector(".submitted")) {
}
// get fetch submitted applications
if (document.querySelector(".submitted")) {
  const parentApplication = document.querySelector(".application");
  fetch(
    "https://bootcamp-2022.devtest.ge/api/applications?token=9a8cb48c-2007-413c-822c-b1876a1feb07"
  )
    .then((response) => response.json())
    .then((data) => {
      data.forEach((element, i) => {
        const submittedAppRow = `
        <div class="collect-each-row">
            <div class="app-row">
              <span class="numberofapp">${i + 1}</span>
              <img src="../../assets/images/Vector.png" alt="app-arrow" />
            </div>
            <div class="app-content hidden">
              <div class="block">
                <h3>Personal Information</h3>
                <div class="block-collect-info">
                  <div class="first-name">
                    <h4>first name</h4>
                    <span class="name">${element.first_name}</span>
                  </div>
                  <div class="last-name">
                    <h4>last name</h4>
                    <span class="surname">${element.last_name}</span>
                  </div>
                  <div class="e-mail">
                    <h4>e mail</h4>
                    <span class="emailofapp">${element.email}</span>
                  </div>
                  <div class="phone-num">
                    <h4>phone</h4>
                    <span class="phonenum">${element.phone}</span>
                  </div>
                </div>
              </div>
              <div class="block">
                <h3>skillset</h3>
                <div class="block-collect-info">
               ${element.skills.map((el, u) => {
                 return ` <div class="skillset-block">
                     <h4>${element.skills[u].id}</h4>
                     <span class="skill-experience">
                       Years of Experience:${element.skills[u].experience}
                     </span>
                   </div>
                   `;
               })}
                </div>
              </div>
              <div class="block">
                <h3>covid situation</h3>
                <div class="block-collect-info">
                  <p>How would you prefer to work?</p>
                  <div class="answer-1">
                    <img
                      src="../../assets/images/${
                        element.work_preference == "from_office"
                          ? "active"
                          : "inactive"
                      }-button.png"
                      alt="selected"
                    />
                    <span>From Sairme Office</span>
                  </div>
                  <div class="answer-1">
                    <img
                      src="../../assets/images/${
                        element.work_preference == "from_home"
                          ? "active"
                          : "inactive"
                      }-button.png"
                      alt="selected"
                    />
                    <span>From Home</span>
                  </div>
                  <div class="answer-1">
                    <img
                      src="../../assets/images/${
                        element.work_preference == "hybrid"
                          ? "active"
                          : "inactive"
                      }-button.png"
                      alt="selected"
                    />
                    <span>Hybrid</span>
                  </div>
                  <p>Did you have covid 19?</p>
                  <div class="answer-2">
                    <img
                      src="../../assets/images/${
                        element.had_covid ? "active" : "inactive"
                      }-button.png"
                      alt="selected"
                    />
                    <span>Yes</span>
                  </div>
                  <div class="answer-2">
                    <img
                      src="../../assets/images/${
                        !element.had_covid ? "active" : "inactive"
                      }-button.png"
                      alt="selected"
                    />
                    <span>No</span>
                  </div>
                  <p>When did you have covid 19?</p>
                  <div class="covid-had-date">
                    <span>${element.had_covid_at}</span>
                    <img
                      src="../../assets/images/calendar.png"
                      alt="coviddate"
                    />
                  </div>
                  <p>Have you been vaccinated?</p>
                  <div class="answer-3">
                    <img
                      src="../../assets/images/${
                        element.vaccinated == true ? "active" : "inactive"
                      }-button.png"
                      alt="selected"
                    />
                    <span>Yes</span>
                  </div>
                  <div class="answer-3">
                    <img
                      src="../../assets/images/${
                        !element.vaccinated ? "active" : "inactive"
                      }-button.png"
                      alt="selected"
                    />
                    <span>No</span>
                  </div>
                  <p>When did you get covid vaccine?</p>
                  <div class="covid-vaccine-date">
                    <span>${element.vaccinated_at}</span>
                    <img
                      src="../../assets/images/calendar.png"
                      alt="vaccinedate"
                    />
                  </div>
                </div>
              </div>
              <div class="block">
                <h3>insights</h3>
                <div class="block-collect-info">
                  <p>
                    Would you attend Devtalks and maybe also organize your own?
                  </p>
                  <div class="answer-4">
                    <img
                      src="../../assets/images/${
                        element.will_organize_devtalk ? "active" : "inactive"
                      }-button.png"
                      alt="selected"
                    />
                    <span>Yes</span>
                  </div>
                  <div class="answer-4">
                    <img
                      src="../../assets/images/${
                        !element.will_organize_devtalk ? "active" : "inactive"
                      }-button.png"
                      alt="selected"
                    />
                    <span>No</span>
                  </div>
                  <p>What would you speak about at Devtalk?</p>
                  <div class="textarea-result-devtalk">
                    <p>${element.devtalk_topic}</p>
                  </div>
                  <p>Tell us something special</p>
                  <div class="textarea-result-smth">
                    <p>${element.something_special}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
                `;
        parentApplication.insertAdjacentHTML("afterbegin", submittedAppRow);
      });
      const redSubmittedRow = document.querySelectorAll(".app-row");
      redSubmittedRow.forEach((el, i) => {
        el.addEventListener("click", (e) => {
          el.nextElementSibling.classList.toggle("hidden");
        });
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
    skillsArray.push({
      id:
        skills.value == "HTML"
          ? 1
          : skills.value == "CSS"
          ? 2
          : skills.value == "Svelte"
          ? 3
          : skills.value == "Angular"
          ? 4
          : skills.value == "Vue.JS"
          ? 5
          : skills.value == "React.JS"
          ? 6
          : skills.value == "Laravel"
          ? 7
          : 8,
      experience: inputExperienceYears.value,
    });
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
  checkDateInput();
  checkVaccineDateInput();
  checkIfHadCovid();
  checkIfVaccinated();
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
      return true;
    }
  });
}
if (radioCovidNo) {
  radioCovidNo.addEventListener("change", () => {
    if (!questionWhenCovid.classList.contains("hidden")) {
      questionWhenCovid.classList.add("hidden");
      CovidDate.classList.add("hidden");
      return true;
    }
  });
}
if (radioVaccineYes) {
  radioVaccineYes.addEventListener("change", () => {
    if (radioVaccineYes.checked) {
      questionWhenVaccinated.classList.remove("hidden");
      VaccineDate.classList.remove("hidden");
      return true;
    }
  });
}
if (radioVaccineNo) {
  radioVaccineNo.addEventListener("change", () => {
    if (!questionWhenVaccinated.classList.contains("hidden")) {
      questionWhenVaccinated.classList.add("hidden");
      VaccineDate.classList.add("hidden");
      return true;
    }
  });
}
if (radioDevtalksYes) {
  radioDevtalksYes.addEventListener("change", () => {
    if (radioDevtalksYes.checked) {
      questionDevtalksAbout.classList.remove("hidden");
      textareaAbout.classList.remove("hidden");
      return true;
    }
  });
}
if (radioDevtalksNo) {
  radioDevtalksNo.addEventListener("change", () => {
    if (!questionDevtalksAbout.classList.contains("hidden")) {
      questionDevtalksAbout.classList.add("hidden");
      textareaAbout.classList.add("hidden");
      return true;
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
    }
    return true;
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
  } else if (CovidDate.value !== "") {
    return true;
  }
  return true;
}
if (CovidDate) {
  CovidDate.addEventListener("input", () => {
    if (CovidDate.value !== "") {
      CovidDate.classList.remove("error-border");
      CovidDate.nextElementSibling.classList.add("hidden");
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
    }
    return true;
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
  } else if (VaccineDate.value !== "") {
    return true;
  }
  return true;
}
if (VaccineDate) {
  VaccineDate.addEventListener("input", () => {
    if (VaccineDate.value !== "") {
      VaccineDate.classList.remove("error-border");
      VaccineDate.nextElementSibling.classList.add("hidden");
    }
    return true;
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
    }
    return true;
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
  if (el.value == "" && !el.classList.contains("hidden")) {
    el.nextElementSibling.classList.remove("hidden");
    el.nextElementSibling.textContent = "*Fill this form please";
    el.classList.add("error-border");
    return false;
  } else if (el.value !== "") {
    return true;
  }
  return true;
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
// make pagination alive
let pageCounter = 1;
let nextPage = false;
if (pageCircles) {
  pageCirclesArr.slice(0, 1).forEach((el) => {
    el.classList.add("opacitymax");
  });
  if (nextSlideBtn) {
    nextSlideBtn.addEventListener("click", () => {
      nextPage = true;
      if (pageCounter == 1 && nextPage) {
        if (checkFirstSliderInputs()) {
          pageCounter++;
          pageCirclesArr.slice(0, 2).forEach((el) => {
            el.classList.add("opacitymax");
          });
          groupLefts.forEach((el, i) => {
            if (!el.classList.contains("hidden")) {
              el.classList.add("hidden");
            }
          });
          groupLefts[pageCounter - 1].classList.remove("hidden");
          groupRights.forEach((el, i) => {
            if (!el.classList.contains("hidden")) {
              el.classList.add("hidden");
            }
          });
          groupRights[pageCounter - 1].classList.remove("hidden");
        }
        nextPage = false;
      } else {
        checkFirstSliderInputs();
      }
      if (pageCounter == 2 && nextPage) {
        if (checkSecondSlider()) {
          pageCounter++;
          pageCirclesArr.slice(0, 3).forEach((el) => {
            el.classList.add("opacitymax");
          });
          groupLefts.forEach((el, i) => {
            if (!el.classList.contains("hidden")) {
              el.classList.add("hidden");
            }
          });
          groupLefts[pageCounter - 1].classList.remove("hidden");
          groupRights.forEach((el, i) => {
            if (!el.classList.contains("hidden")) {
              el.classList.add("hidden");
            }
          });
          groupRights[pageCounter - 1].classList.remove("hidden");
        }
        nextPage = false;
      } else {
        checkSecondSlider();
      }
      if (pageCounter == 3 && nextPage) {
        if (checkThirdCovidStageInputs()) {
          pageCounter++;
          groupLefts.forEach((el, i) => {
            if (!el.classList.contains("hidden")) {
              el.classList.add("hidden");
            }
          });
          groupLefts[pageCounter - 1].classList.remove("hidden");
          groupRights.forEach((el, i) => {
            if (!el.classList.contains("hidden")) {
              el.classList.add("hidden");
            }
          });
          groupRights[pageCounter - 1].classList.remove("hidden");
          pageCirclesArr.slice(0, 4).forEach((el) => {
            el.classList.add("opacitymax");
          });
        }
        nextPage = false;
      } else {
        checkThirdCovidStageInputs();
      }
      if (pageCounter == 4 && nextPage) {
        if (checkFourthInsightInputs()) {
          pageCounter++;
          groupLefts.forEach((el, i) => {
            if (!el.classList.contains("hidden")) {
              el.classList.add("hidden");
            }
          });
          groupRights.forEach((el, i) => {
            if (!el.classList.contains("hidden")) {
              el.classList.add("hidden");
            }
          });
          submitPage.classList.remove("top-hide");
        }
      } else {
        checkFourthInsightInputs();
      }
    });
  }
  if (prevSlideBtn) {
    prevSlideBtn.addEventListener("click", () => {
      if (pageCounter == 1) {
        window.location.href = "/index.html";
      }
      pageCounter--;
      groupLefts.forEach((el, i) => {
        if (!el.classList.contains("hidden")) {
          el.classList.add("hidden");
        }
      });
      groupLefts[pageCounter - 1].classList.remove("hidden");
      groupRights.forEach((el, i) => {
        if (!el.classList.contains("hidden")) {
          el.classList.add("hidden");
        }
      });
      groupRights[pageCounter - 1].classList.remove("hidden");
      pageCirclesArr[pageCounter].classList.remove("opacitymax");
    });
  }
  if (submitPage) {
    backFromSubmit.addEventListener("click", () => {
      pageCounter = 4;
      groupLefts.forEach((el, i) => {
        if (!el.classList.contains("hidden")) {
          el.classList.add("hidden");
        }
      });
      groupLefts[pageCounter - 1].classList.remove("hidden");
      groupRights.forEach((el, i) => {
        if (!el.classList.contains("hidden")) {
          el.classList.add("hidden");
        }
      });
      groupRights[pageCounter - 1].classList.remove("hidden");
      submitPage.classList.add("top-hide");
    });
  }
  if (circle1) {
    circle1.addEventListener("click", () => {
      pageCounter = 1;
      pageCirclesArr.forEach((el, i) => {
        if (el.classList.contains("opacitymax")) {
          el.classList.remove("opacitymax");
        }
      });
      circle1.classList.add("opacitymax");
      groupLefts.forEach((el, i) => {
        if (!el.classList.contains("hidden")) {
          el.classList.add("hidden");
        }
      });
      groupLefts[pageCounter - 1].classList.remove("hidden");
      groupRights.forEach((el, i) => {
        if (!el.classList.contains("hidden")) {
          el.classList.add("hidden");
        }
      });
      groupRights[pageCounter - 1].classList.remove("hidden");
    });
  }
  if (circle2) {
    circle2.addEventListener("click", () => {
      if (checkFirstSliderInputs()) {
        pageCounter = 2;
        pageCirclesArr.forEach((el, i) => {
          if (el.classList.contains("opacitymax")) {
            el.classList.remove("opacitymax");
          }
        });
        circle1.classList.add("opacitymax");
        circle2.classList.add("opacitymax");
        groupLefts.forEach((el, i) => {
          if (!el.classList.contains("hidden")) {
            el.classList.add("hidden");
          }
        });
        groupLefts[pageCounter - 1].classList.remove("hidden");
        groupRights.forEach((el, i) => {
          if (!el.classList.contains("hidden")) {
            el.classList.add("hidden");
          }
        });
        groupRights[pageCounter - 1].classList.remove("hidden");
      }
    });
  }
  if (circle3) {
    circle3.addEventListener("click", () => {
      if (checkSecondSlider()) {
        pageCounter = 3;
        pageCirclesArr.forEach((el, i) => {
          if (el.classList.contains("opacitymax")) {
            el.classList.remove("opacitymax");
          }
        });
        circle1.classList.add("opacitymax");
        circle2.classList.add("opacitymax");
        circle3.classList.add("opacitymax");
        groupLefts.forEach((el, i) => {
          if (!el.classList.contains("hidden")) {
            el.classList.add("hidden");
          }
        });
        groupLefts[pageCounter - 1].classList.remove("hidden");
        groupRights.forEach((el, i) => {
          if (!el.classList.contains("hidden")) {
            el.classList.add("hidden");
          }
        });
        groupRights[pageCounter - 1].classList.remove("hidden");
      }
    });
  }
  if (circle4) {
    circle4.addEventListener("click", () => {
      if (checkThirdCovidStageInputs()) {
        pageCounter = 4;
        pageCirclesArr.forEach((el, i) => {
          if (el.classList.contains("opacitymax")) {
            el.classList.remove("opacitymax");
          }
        });
        circle1.classList.add("opacitymax");
        circle2.classList.add("opacitymax");
        circle3.classList.add("opacitymax");
        circle4.classList.add("opacitymax");
        groupLefts.forEach((el, i) => {
          if (!el.classList.contains("hidden")) {
            el.classList.add("hidden");
          }
        });
        groupLefts[pageCounter - 1].classList.remove("hidden");
        groupRights.forEach((el, i) => {
          if (!el.classList.contains("hidden")) {
            el.classList.add("hidden");
          }
        });
        groupRights[pageCounter - 1].classList.remove("hidden");
      }
    });
  }
  if (circle5) {
    circle5.addEventListener("click", () => {
      if (checkFourthInsightInputs()) {
        pageCounter = 5;
        groupLefts.forEach((el, i) => {
          if (!el.classList.contains("hidden")) {
            el.classList.add("hidden");
          }
        });
        groupRights.forEach((el, i) => {
          if (!el.classList.contains("hidden")) {
            el.classList.add("hidden");
          }
        });
        submitPage.classList.remove("top-hide");
      }
    });
  }
}
// send data to api
if (formFull) {
  const url = "https://bootcamp-2022.devtest.ge/api/application";
  formFull.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = {
      token: "9a8cb48c-2007-413c-822c-b1876a1feb07",
      first_name: `${inputFirstName.value}`,
      last_name: `${inputLastName.value}`,
      email: `${inputEmail.value}`,

      skills: [...skillsArray],
      work_preference: `${
        radioOffice.checked
          ? "from_office"
          : radioHome.checked
          ? "from_home"
          : "hybrid"
      }`,
      had_covid: radioCovidYes.checked,

      vaccinated: radioVaccineYes.checked,

      will_organize_devtalk: radioDevtalksYes.checked,

      something_special: `${textareaSpecial.value}`,
    };
    if (inputPhoneNumber.value) {
      data.phone = `${inputPhoneNumber.value.trim()};`;
    }
    if (radioCovidYes.checked) {
      data.had_covid_at = `${CovidDate.value + ""}`;
    }
    if (radioVaccineYes.checked) {
      data.vaccinated_at = `${VaccineDate.value + ""}`;
    }
    if (radioDevtalksYes.checked) {
      data.devtalk_topic = `${textareaAbout.value}`;
    }
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
      });
      window.location.href = "/src/pages/finish.html";
    } catch (error) {
      console.log(error);
    }
  });
}
