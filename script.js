const output_year = document.querySelector(".output-Year");
const output_Month = document.querySelector(".output-Month");
const output_Day = document.querySelector(".output-Day");

const submit_btn = document.querySelector(".submit-btn");
const input_year = document.querySelector("#year"); 
const input_Month = document.querySelector("#Month");
const input_Day = document.querySelector("#day"); 


const error_Day = document.querySelector(".error-Day");
const error_Month = document.querySelector(".error-Month");
const error_year = document.querySelector(".error-Year");


let isValid = false;


input_Day.addEventListener("input", (e) => {
    if (+input_Day.value > 31) {
        error_Day.textContent = "Must be a valid date";
        isValid = false;
        return;
    } else {
        isValid = true;
        error_Day.textContent = "";
    }
    if (+input_Day.value === 0) {
        isValid = false;
        error_Day.textContent = "This field is required";
        isValid = false;
        return;
    } else {
        error_Day.textContent = "";
    }
});

input_Month.addEventListener("input", (e) => {
    if (+input_Month.value > 12) {
        error_Month.textContent = "Must be a valid date";
        isValid = false;
        return;
    } else {
        isValid = true;
        error_Month.textContent = "";
    }
    if (+input_Month.value === 0) {
        isValid = false;
        error_Month.textContent = "This field is required";
        isValid = false;
        return;
    } else {
        error_Month.textContent = "";
    }
});

input_year.addEventListener("input", (e) => {
    if (+input_year.value > 2041) {
        error_year.textContent = "Must be a valid date";
        isValid = false;
        return;
    } else {
        isValid = true;
        error_year.textContent = "";
    }
    if (+input_year.value === 0) {
        isValid = false;
        error_year.textContent = "This field is required";
        isValid = false;
        return;
    } else {
        error_year.textContent = "";
    }
});

// Function to calculate and display the age
function CalculateDate() {
    if (isValid) {
        let birthday = `${input_Month.value}/${input_Day.value}/${input_year.value}`;
        console.log(birthday);
        let birthdayObj = new Date(birthday);
        let ageDiffMill = Date.now() - birthdayObj;
        let ageDate = new Date(ageDiffMill);
        let ageYears = ageDate.getUTCFullYear() - 1970;
        let ageMonth = ageDate.getUTCMonth();
        let ageDay = ageDate.getUTCDay() - 1;
        output_Day.textContent = ageDay;
        output_Month.textContent = ageMonth;
        output_year.textContent = ageYears;
    } else {
        alert("Please fill in all required fields with valid values.");
    }
}

// Add a click event listener to the submit button
submit_btn.addEventListener("click", CalculateDate);

