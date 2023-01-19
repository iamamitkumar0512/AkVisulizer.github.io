const searchBtn = document.querySelector(".search-btn");
let startSearch = false;

const linearSearch = async function (key) {
  startSearch = true;
  const linearBar = document.querySelectorAll(".bar-linear");
  const linearHead = document.querySelector("#linear-index");
  for (let i = 0; i < linearBar.length; i++) {
    await waitforme(100);
    linearBar[i].style.background = "#FBCEB1";
    if (parseInt(linearBar[i].style.height) === key) {
      linearBar[i].style.background = "#006400";
      // console.log(i);
      linearHead.innerHTML = `Linear Search(Element found at index ${i})`;
      linearHead.style.color = "#ACE1AF";
      return;
    }
  }
  linearHead.innerHTML = `Linear Search(Element not found)`;
  linearHead.style.color = "#E23D28";
};

const binarySearch = async function (key) {
  const binaryBar = document.querySelectorAll(".bar-binary");
  const binaryHead = document.querySelector("#binary-index");
  start = 0;
  end = 149;
  while (start <= end) {
    await waitforme(100);
    let mid = parseInt((start + end) / 2);
    binaryBar[mid].style.background = "#FBCEB1";
    if (parseInt(binaryBar[mid].style.height) === key) {
      binaryBar[mid].style.background = "#006400";
      binaryHead.innerHTML = `Binary Search(Element found at index ${mid})`;
      binaryHead.style.color = "#ACE1AF";
      return;
    } else if (parseInt(binaryBar[mid].style.height) > key) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  binaryHead.innerHTML = `Binary Search(Element not found)`;
  binaryHead.style.color = "#E23D28";
};

const disableSearchBtn = function () {
  searchBtn.disabled = true;
  document.querySelector("#search-number").disabled = true;
  document.querySelector(".search-new").disabled = true;
};

const enableSearchBtn = function () {
  searchBtn.disabled = false;
  document.querySelector("#search-number").disabled = false;
  document.querySelector(".search-new").disabled = false;
};

const refresh = function () {
  const binaryBar = document.querySelectorAll(".bar-binary");
  const linearBar = document.querySelectorAll(".bar-linear");
  for (let j = 0; j < 150; j++) {
    binaryBar[j].style.background = "aqua";
    linearBar[j].style.background = "aqua";
  }
  const binaryHead = document.querySelector("#binary-index");
  const linearHead = document.querySelector("#linear-index");
  binaryHead.innerHTML = "Binary Search";
  linearHead.innerHTML = "Linear Search";
  binaryHead.style.color = "#edf0f1";
  linearHead.style.color = "#edf0f1";
};

searchBtn.addEventListener("click", async function () {
  const key = parseInt(document.querySelector("#search-number").value);
  document.querySelector("#search-number").value = "";
  if (Number.isNaN(key)) {
    alert("Please enter a number");
    return;
  }
  if (startSearch) {
    refresh();
  }
  disableSearchBtn();
  await Promise.all([linearSearch(key), binarySearch(key)]);
  enableSearchBtn();
});
