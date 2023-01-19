const quickBtn = document.querySelector("#quick");

const partion = async function (arr, s, e) {
  let i = s - 1;
  // color pivot element
  arr[e].style.background = "red";
  for (let j = s; j <= e - 1; j++) {
    // color current element
    arr[j].style.background = "yellow";
    await waitforme(delay);
    if (parseInt(arr[j].style.height) < parseInt(arr[e].style.height)) {
      i++;
      swap(arr[i], arr[j]);
      // color
      arr[i].style.background = "orange";
      if (i != j) arr[j].style.background = "orange";
      await waitforme(delay);
    } else {
      // color if not less than pivot
      arr[j].style.background = "pink";
    }
  }
  i++;
  await waitforme(delay);
  swap(arr[i], arr[e]); // pivot height one
  arr[e].style.background = "pink";
  arr[i].style.background = "green";

  // pause
  await waitforme(delay);

  // color
  for (let k = 0; k < arr.length; k++) {
    if (arr[k].style.background != "green") arr[k].style.background = "aqua";
  }

  return i;
};

const quickSort = async function (arr, s, e) {
  if (s < e) {
    let p = await partion(arr, s, e);
    await quickSort(arr, s, p - 1);
    await quickSort(arr, p + 1, e);
  } else {
    if (s >= 0 && e >= 0 && s < arr.length && e < arr.length) {
      arr[e].style.background = "green";
      arr[e].style.background = "green";
    }
  }
};

quickBtn.addEventListener("click", async function () {
  let barList = document.querySelectorAll(".bar");
  // let array1 = [];
  let s = 0;
  let e = barList.length - 1;
  refreshSort();
  disableSortingBtn();
  disableNewArrayBtn();
  disableSizeSlider();
  await quickSort(barList, s, e);
  // // let bar = document.querySelectorAll(".bar");
  // // for (let i = 0; i < bar.length; i++) {
  // //   array1.push(parseInt(bar[i].style.height));
  // // }
  // console.log(array1);
  enableSortingBtn();
  enableNewArrayBtn();
  enableSizeSlider();
});
