const allcheck = document.getElementById('allcheck');
const checkboxes = document.querySelectorAll('.checked');
const listItems = document.querySelectorAll(".listitems");
const dDayContainer = document.getElementById("d-day");
const radioButtons = document.querySelectorAll(".ss-radio input");
const datepicker = document.getElementById("datepicker")._flatpickr;

const currentScrollPosition = window.scrollY;
console.log("현재 스크롤 위치:", currentScrollPosition);

allcheck.addEventListener('change', function () {
  const isChecked = this.checked;
  checkboxes.forEach(checkbox => checkbox.checked = isChecked);
});

listItems.forEach(item => {
  item.addEventListener("click", () => {
    listItems.forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.classList.remove('active');
      }
    });

    item.classList.add('active');

    datepicker.clear();
    scrollToYOffset(250);
  });
});

function determineScrollOffset() {
  const screenWidth = window.innerWidth;
  return screenWidth >= 950 ? 936 : 650;
}

function handleDatepickerChange(selectedDates, dateStr, instance) {
  const scrollOffset = determineScrollOffset();
  scrollToYOffset(scrollOffset);
}

function handleRadioChange() {
  const scrollOffset = window.innerWidth >= 950 ? 1140 : 1023;
  scrollToYOffset(scrollOffset);
}

function scrollToYOffset(offset) {
  window.scrollTo({ top: offset, behavior: "smooth" });
}

const steps = [".step.step1", ".step.step2", ".step.step3", ".step.step4", ".step.step5"];

function handleScroll() {
  const currentScroll = window.scrollY;

  let activeStep;
  if (currentScroll < 250) {
    activeStep = 1;
  } else if (currentScroll >= 250 && currentScroll < 1140) {
    activeStep = 2;
  } else if (currentScroll >= 1140 && currentScroll < 1758) {
    activeStep = 3;
  } else if (currentScroll >= 1758 && currentScroll < 2302) {
    activeStep = 4;
  } else {
    activeStep = 5;
  }

  steps.forEach((step, index) => {
    const stepElement = document.querySelector(step);
    stepElement.classList.toggle("active", index + 1 !== activeStep);
  });
  console.log(activeStep)
}

window.addEventListener("scroll", handleScroll);
document.addEventListener("DOMContentLoaded", () => {
  const currentScroll = window.scrollY;
  handleScroll(currentScroll);

  datepicker.config.onChange.push(handleDatepickerChange);

  radioButtons.forEach(radio => {
    radio.addEventListener("change", handleRadioChange);
  });
});