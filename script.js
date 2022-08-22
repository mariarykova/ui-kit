const defaultSelect = (selector) => {
  const element = document.querySelector(selector);
  const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: "",
  });
};

defaultSelect(".select");
defaultSelect(".select-two");
defaultSelect(".select-page");

const slider = document.querySelector(".range-first");
const progress = document.querySelector(".progress-first");

slider.oninput = function () {
  progress.style.width = `${this.value}%`;
};

window.onload = function () {
  slideOne();
  slideTwo();
};

/** RANGE WITH TWO THUMBS */

let sliderOne = document.getElementById("slider-1");
let sliderTwo = document.getElementById("slider-2");
let minGap = 0;
let sliderTrack = document.querySelector(".slider-track");
let sliderMaxValue = document.getElementById("slider-1").max;

function slideOne() {
  if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
    sliderOne.value = parseInt(sliderTwo.value) - minGap;
  }
  fillColor();
}
function slideTwo() {
  if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
    sliderTwo.value = parseInt(sliderOne.value) + minGap;
  }
  fillColor();
}
function fillColor() {
  percent1 = (sliderOne.value / sliderMaxValue) * 100;
  percent2 = (sliderTwo.value / sliderMaxValue) * 100;
  sliderTrack.style.background = `linear-gradient(to right, rgba(224, 224, 224, 1) ${percent1}% , rgba(24, 160, 251, 1) ${percent1}% , rgba(24, 160, 251, 1) ${percent2}%, rgba(224, 224, 224, 1) ${percent2}%)`;
}

/**RANGE WITH VALUE */

let rangeWithValue = document.getElementById("rangeWithValue");
let rangeValue = document.getElementById("rangeValue");
let rangeProgress = document.getElementById("rangeProgress");

rangeValue.innerHTML = rangeWithValue.value;
rangeValue.style.left = rangeWithValue.value - 2 + "%";
rangeProgress.style.width = rangeWithValue.value + "%";

rangeWithValue.oninput = () => {
  rangeValue.style.left = rangeWithValue.value - 2 + "%";
  rangeProgress.style.width = rangeWithValue.value + "%";
  rangeValue.innerHTML = rangeWithValue.value;
};

/**RANGE WITH TWO VALUES */

const sliderLeft = document.getElementById("sliderLeft");
const sliderRight = document.getElementById("sliderRight");
const sliderRange = document.getElementById("sliderRange");
const valueLeft = document.getElementById("valueLeft");
const valueChangeLeft = document.querySelector("#valueLeft > div");
const valueRight = document.getElementById("valueRight");
const valueChangeRight = document.querySelector("#valueRight > div");
let minGapTwoValues = 0;
let sliderTrackTwoValues = document.getElementById("sliderTrack");
let sliderMaxValueTwoValues = document.getElementById("sliderLeft").max;

valueLeft.style.left = sliderLeft.value - 4 + "%";
sliderRange.style.left = sliderLeft.value + "%";

valueRight.style.left = sliderRight.value - 4 + "%";

function slideLeft() {
  if (
    parseInt(sliderRight.value) - parseInt(sliderLeft.value) <=
    minGapTwoValues
  ) {
    sliderLeft.value = parseInt(sliderRight.value) - minGapTwoValues;
  }
  valueChangeLeft.innerHTML = sliderLeft.value;
  valueLeft.style.left = sliderLeft.value - 4 + "%";
  sliderRange.style.left = sliderLeft.value + "%";
  fillColorTwoValues();
}

function slideRight() {
  if (
    parseInt(sliderRight.value) - parseInt(sliderLeft.value) <=
    minGapTwoValues
  ) {
    sliderRight.value = parseInt(sliderLeft.value) + minGapTwoValues;
  }
  valueChangeRight.innerHTML = sliderRight.value;
  valueRight.style.left = sliderRight.value - 4 + "%";
  fillColorTwoValues();
}

function fillColorTwoValues() {
  percent1 = (sliderLeft.value / sliderMaxValueTwoValues) * 100;
  percent2 = (sliderRight.value / sliderMaxValueTwoValues) * 100;
  sliderTrackTwoValues.style.background = `linear-gradient(to right, rgba(224, 224, 224, 1) ${percent1}% , rgba(24, 160, 251, 1) ${percent1}% , rgba(24, 160, 251, 1) ${percent2}%, rgba(224, 224, 224, 1) ${percent2}%)`;
}

// RANGE WITH TWO VALUES ver 2

let sliderLeftTwo = document.getElementById("sliderLeftTwo");
let sliderRightTwo = document.getElementById("sliderRightTwo");
let sliderRangeTwo = document.getElementById("sliderRangeTwo");
let valueLeftTwo = document.getElementById("valueLeftTwo");
let valueChangeLeftTwo = document.querySelector("#valueLeftTwo > div");
let valueRightTwo = document.getElementById("valueRightTwo");
let valueChangeRightTwo = document.querySelector("#valueRightTwo > div");
let minGapTwo = 0;
let sliderTrackTwo = document.getElementById("sliderTrackTwo");
let sliderMaxValueTwo = document.getElementById("sliderLeftTwo").max;

valueLeftTwo.style.left = sliderLeftTwo.value - 4 + "%";
sliderRangeTwo.style.left = sliderLeftTwo.value - 4 + "%";

valueRightTwo.style.left = sliderRight.value - 6 + "%";

function slideLeftTwo() {
  if (
    parseInt(sliderRightTwo.value) - parseInt(sliderLeftTwo.value) <=
    minGapTwo
  ) {
    sliderLeftTwo.value = parseInt(sliderRightTwo.value) - minGapTwo;
  }
  valueChangeLeftTwo.innerHTML = sliderLeftTwo.value;
  valueLeftTwo.style.left = sliderLeftTwo.value - 4 + "%";
  sliderRangeTwo.style.left = sliderLeftTwo.value + "%";
  fillColorTwo();
}

function slideRightTwo() {
  if (
    parseInt(sliderRightTwo.value) - parseInt(sliderLeftTwo.value) <=
    minGap
  ) {
    sliderRightTwo.value = parseInt(sliderLeftTwo.value) + minGap;
  }
  valueChangeRightTwo.innerHTML = sliderRightTwo.value;
  valueRightTwo.style.left = sliderRightTwo.value - 4 + "%";
  fillColorTwo();
}

function fillColorTwo() {
  percent1 = (sliderLeftTwo.value / sliderMaxValueTwo) * 100;
  percent2 = (sliderRightTwo.value / sliderMaxValueTwo) * 100;
  sliderTrackTwo.style.background = `linear-gradient(to right, rgba(224, 224, 224, 1) ${percent1}% , rgba(24, 160, 251, 1) ${percent1}% , rgba(24, 160, 251, 1) ${percent2}%, rgba(224, 224, 224, 1) ${percent2}%)`;
}

// TABS

function openTab(evt) {
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active-tab", "");
  }

  evt.currentTarget.className += " active-tab";
}

function clickTab(evt, itemClass, activeClass) {
  tablinks = document.getElementsByClassName(itemClass);
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(
      ` ${activeClass}`,
      ""
    );
  }

  evt.currentTarget.className += ` ${activeClass}`;
}

// PROGRESS BAR

function setProgress(percent) {
  const circleBar = document.querySelector(".circle-progress");
  const value = document.querySelector(".circle-percent");

  let progressValue = 0;
  let endProgressVlaue = percent;
  let speed = 100;

  let progress = setInterval(() => {
    progressValue++;
    value.textContent = `${progressValue} %`;
    circleBar.style.background = `conic-gradient(
        rgba(24, 160, 251, 1) ${progressValue * 3.6}deg,
        rgba(224, 224, 224, 1) ${progressValue * 3.6}deg
        
    )`;
    if (progressValue == endProgressVlaue) {
      clearInterval(progress);
    }
  }, speed);
}

setProgress(69);

function isProgressBar(percent) {
  let progressPercent = document.querySelector(".progress-percent");
  let numProgress = document.getElementById("numProgress");
  let progress = 0;

  const moveProgress = setInterval(() => {
    progressPercent.style.width = progress + "%";
    numProgress.innerHTML = progress + "% uploaded";
    if (progress >= percent) {
      clearInterval(moveProgress);
    }
    progress += 1;
  }, 100);
}

isProgressBar(69);

// TABLE

const mainCheckBox = document.getElementById("main-checkbox");
const checkboxes = document.getElementsByClassName("table-item-checkbox");
const itemCheckboxes = document.querySelectorAll(
  "tbody[data-id='tbody-one']>tr"
);
function selectedAllCheckboxes() {
  if (mainCheckBox.checked) {
    for (var x = 0; x < checkboxes.length; x++) {
      checkboxes[x].checked = true;
    }
    for (var x = 0; x < itemCheckboxes.length; x++) {
      itemCheckboxes[x].style.background = "rgba(255, 212, 34, 0.1)";
    }
  } else {
    for (var x = 0; x < checkboxes.length; x++) {
      checkboxes[x].checked = false;
    }
    for (var x = 0; x < itemCheckboxes.length; x++) {
      itemCheckboxes[x].style.background = "white";
    }
  }
}

function selectOneCheckbox(event) {
  for (var x = 0; x < checkboxes.length; x++) {
    if (checkboxes[x].checked) {
      event.currentTarget.style.background = "rgba(255, 212, 34, 0.1)";
    }
  }
}
