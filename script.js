// Creating array to store randomly generated numbers
let array = [];
let arraySearch = [];

// Helper function to delete all the previous bars so that new can be added
const deleteChild = function () {
  const bar = document.querySelector("#bars");
  bar.innerHTML = "";
};

// To create new array input size of array
const createNewArray = function (noOfBars = 45) {
  // calling helper function to delete old bars from dom
  deleteChild();

  // creating an array of random numbers
  array = [];
  for (let i = 0; i < noOfBars; i++) {
    array.push(Math.floor(Math.random() * 200) + 1);
  }
  // console.log(array);

  const bars = document.querySelector("#bars");
  for (let i = 0; i < noOfBars; i++) {
    const bar = document.createElement("div");
    bar.style.height = `${array[i] * 2}px`;
    bar.classList.add("bar");
    bar.classList.add("bar-item");
    bar.classList.add(`barNo${i}`);
    bars.appendChild(bar);
  }
};

createNewArray();

// Selecting newarray button from DOM and adding eventlistener
const newArray = document.querySelector(".new-array");
newArray.addEventListener("click", function () {
  enableSortingBtn();
  enableSizeSlider();
  createNewArray(arraySize.value);
});

let arraySize = document.querySelector("#arr_size");

// Event listener to update the bars on the UI
arraySize.addEventListener("input", function () {
  // console.log(arraySize.value, typeof arraySize.value);
  createNewArray(parseInt(arraySize.value));
});

const deleteLinearChild = function () {
  const linearbar = document.querySelector("#linear-bars");
  linearbar.innerHTML = "";
};

const deleteBinaryChild = function () {
  const binarybar = document.querySelector("#binary-bars");
  binarybar.innerHTML = "";
};

const createSearchArray = function (noOfBars = 150) {
  deleteLinearChild();
  deleteBinaryChild();
  array = [];
  arraySearch = [];
  for (let i = 0; i < noOfBars; i++) {
    array.push(Math.floor(Math.random() * 100) + 3);
  }
  for (let i = 0; i < array.length; i++) {
    arraySearch.push(array[i]);
  }

  const linearbars = document.querySelector("#linear-bars");
  for (let i = 0; i < noOfBars; i++) {
    const bar = document.createElement("div");
    bar.style.height = `${array[i] * 2}px`;
    bar.classList.add("bar-linear");
    bar.classList.add("bar-item1");
    bar.classList.add(`barNo${i}`);
    linearbars.appendChild(bar);
  }

  arraySearch.sort(function (a, b) {
    return a - b;
  });

  const binarybars = document.querySelector("#binary-bars");
  for (let i = 0; i < noOfBars; i++) {
    const bar = document.createElement("div");
    bar.style.height = `${arraySearch[i] * 2}px`;
    bar.classList.add("bar-binary");
    bar.classList.add("bar-item1");
    bar.classList.add(`barNo${i}`);
    binarybars.appendChild(bar);
  }
};

createSearchArray();

const searchNewArray = document.querySelector(".search-new");
searchNewArray.addEventListener("click", function () {
  createSearchArray();
  const binaryHead = document.querySelector("#binary-index");
  const linearHead = document.querySelector("#linear-index");
  binaryHead.innerHTML = "Binary Search";
  linearHead.innerHTML = "Linear Search";
  binaryHead.style.color = "#edf0f1";
  linearHead.style.color = "#edf0f1";
});

// Event listener to update searching sorting options colour and conatiner
const sortingConatiner = document.querySelector(".container1");
const searchingConatiner = document.querySelector(".conatiner2");
const sortingLi = document.querySelector("#Sorting-li");
const searchingLi = document.querySelector("#Searching-li");
sortingLi.addEventListener("click", function (e) {
  if (e.target.classList.contains("active")) {
    return;
  } else {
    searchingLi.classList.remove("active");
    sortingLi.classList.add("active");
    sortingConatiner.classList.toggle("hidden");
    searchingConatiner.classList.toggle("hidden");
  }
});

searchingLi.addEventListener("click", function (e) {
  if (e.target.classList.contains("active")) {
    return;
  } else {
    sortingLi.classList.remove("active");
    searchingLi.classList.add("active");
    sortingConatiner.classList.toggle("hidden");
    searchingConatiner.classList.toggle("hidden");
  }
});

// swap function util for sorting algorithms takes input of 2 DOM elements with .style.height feature
const swap = function (el1, el2) {
  // console.log("In swap()");

  let temp = el1.style.height;
  el1.style.height = el2.style.height;
  el2.style.height = temp;
};

const waitforme = function (milisec) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, milisec);
  });
};

// Default input for waitforme function (260ms)
let delay = 260;
let delayElement = document.querySelector("#speed_input");

// Event listener to update delay time
delayElement.addEventListener("input", function () {
  // console.log(delayElement.value, typeof delayElement.value);
  delay = 320 - parseInt(delayElement.value);
});

const disableSortingBtn = function () {
  document.querySelector("#merge").disabled = true;
  document.querySelector("#quick").disabled = true;
  document.querySelector("#selection").disabled = true;
  document.querySelector("#bubble").disabled = true;
  document.querySelector("#insertion").disabled = true;
};

const enableSortingBtn = function () {
  document.querySelector("#merge").disabled = false;
  document.querySelector("#quick").disabled = false;
  document.querySelector("#selection").disabled = false;
  document.querySelector("#bubble").disabled = false;
  document.querySelector("#insertion").disabled = false;
};

const disableSizeSlider = function () {
  document.querySelector("#arr_size").disabled = true;
};

const enableSizeSlider = function () {
  document.querySelector("#arr_size").disabled = false;
};

const disableNewArrayBtn = function () {
  document.querySelector(".new-array").disabled = true;
};

const enableNewArrayBtn = function () {
  document.querySelector(".new-array").disabled = false;
};
