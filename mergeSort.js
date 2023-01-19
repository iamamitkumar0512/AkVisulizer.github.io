const mergeBtn = document.querySelector("#merge");

const merge = async function (arr, s, m, e) {
  let n1 = m - s + 1;
  let n2 = e - m;
  let left = new Array(n1);
  let right = new Array(n2);
  for (let i = 0; i < n1; i++) {
    await waitforme(delay);
    arr[s + i].style.background = "#FFBF00";
    left[i] = arr[s + i].style.height;
  }
  for (let j = 0; j < n2; j++) {
    await waitforme(delay);
    arr[m + 1 + j].style.background = "#F28C28";
    right[j] = arr[m + 1 + j].style.height;
  }
  await waitforme(delay);
  let i = 0;
  let j = 0;
  let k = s;
  while (i < n1 && j < n2) {
    await waitforme(delay);
    if (parseInt(left[i]) <= parseInt(right[j])) {
      if (n1 + n2 === arr.length) {
        arr[k].style.background = "#018749";
      } else {
        arr[k].style.background = "#4FFFB0";
      }
      arr[k].style.height = left[i];
      i++;
      k++;
    } else {
      if (n1 + n2 === arr.length) {
        arr[k].style.background = "#018749";
      } else {
        arr[k].style.background = "#4FFFB0";
      }
      arr[k].style.height = right[j];
      j++;
      k++;
    }
  }
  while (i < n1) {
    await waitforme(delay);
    if (n1 + n2 === arr.length) {
      arr[k].style.background = "#018749";
    } else {
      arr[k].style.background = "#4FFFB0";
    }
    arr[k].style.height = left[i];
    i++;
    k++;
  }
  while (j < n2) {
    await waitforme(delay);
    if (n1 + n2 === arr.length) {
      arr[k].style.background = "#018749";
    } else {
      arr[k].style.background = "#4FFFB0";
    }
    arr[k].style.height = right[j];
    j++;
    k++;
  }
};

const mergeSort = async function (arr, s, e) {
  if (s >= e) {
    return;
  }
  let m = parseInt((s + e) / 2);
  await mergeSort(arr, s, m);
  await mergeSort(arr, m + 1, e);
  await merge(arr, s, m, e);
};

mergeBtn.addEventListener("click", async function () {
  let barList = document.querySelectorAll(".bar");
  let array1 = [];
  let s = 0;
  let e = barList.length - 1;
  refreshSort();
  disableSortingBtn();
  disableNewArrayBtn();
  disableSizeSlider();
  await mergeSort(barList, s, e);
  let bar = document.querySelectorAll(".bar");
  for (let i = 0; i < bar.length; i++) {
    array1.push(parseInt(bar[i].style.height));
  }
  console.log(array1);
  enableSortingBtn();
  enableNewArrayBtn();
  enableSizeSlider();
});
