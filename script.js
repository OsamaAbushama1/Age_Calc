function calculateAge() {
  let dayInput = document.getElementById("day");
  let monthInput = document.getElementById("month");
  let yearInput = document.getElementById("year");
  let dayError = document.getElementById("day-error");
  let monthError = document.getElementById("month-error");
  let yearError = document.getElementById("year-error");

  let day = dayInput.value;
  let month = monthInput.value;
  let year = yearInput.value;

  let isValid = true;

  if (!day || day < 1 || day > 31) {
    dayInput.classList.add("error");
    dayError.textContent = "Must be a valid day";
    isValid = false;
  } else {
    dayInput.classList.remove("error");
    dayError.textContent = "";
  }
  if (!month || month < 1 || month > 12) {
    monthInput.classList.add("error");
    monthError.textContent = "Must be a valid month";
    isValid = false;
  } else {
    monthInput.classList.remove("error");
    monthError.textContent = "";
  }
  if (!year || year < 1900) {
    yearInput.classList.add("error");
    yearError.textContent = "Must be a valid year";
    isValid = false;
  } else {
    yearInput.classList.remove("error");
    yearError.textContent = "";
  }

  if (!isValid) {
    return;
  }

  let birthDate = new Date(year, month - 1, day);
  let today = new Date();
  let ageYears = today.getFullYear() - birthDate.getFullYear();
  let ageMonths = today.getMonth() - birthDate.getMonth();
  let ageDays = today.getDate() - birthDate.getDate();

  if (ageDays < 0) {
    ageMonths--;
    let lastMonth = new Date(
      today.getFullYear(),
      today.getMonth(),
      0
    ).getDate();
    ageDays += lastMonth;
  }
  if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
  }

  document.getElementById("years").innerText = ageYears;
  document.getElementById("months").innerText = ageMonths;
  document.getElementById("days").innerText = ageDays;
}
