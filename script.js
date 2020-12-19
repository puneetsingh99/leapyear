
const btnLeapYear = document.querySelector("#btn-checkLeapYear");


btnLeapYear.addEventListener("click", () => {
    const dob = document.querySelector("#input-dob");
    const output = document.querySelector("#h2-output");
    output.innerHTML = dob.value;
});