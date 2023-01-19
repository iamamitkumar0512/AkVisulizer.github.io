const insertionBtn = document.querySelector("#insertion");

const insertionSort = async function () {
  const barList = document.querySelectorAll(".bar");
  // As we assume first element is sorted in insertion sort
  barList[0].style.background = "#006400";
  for (let i = 1; i < barList.length; i++) {
    let j = i - 1;
    let key = barList[i].style.height;
    barList[i].style.background = "#5072A7";
    await waitforme(delay);
    while (j >= 0 && parseInt(barList[j].style.height) > parseInt(key)) {
      barList[j].style.background = "#5072A7";
      await waitforme(delay);
      barList[j].style.background = "#FBCEB1";
      barList[j + 1].style.background = "#FBCEB1";
      await waitforme(delay);
      barList[j + 1].style.height = barList[j].style.height;
      j--;

      // green colour for right part sorted array
      for (let k = i; k >= 0; k--) {
        barList[k].style.background = "#006400";
      }
    }
    barList[j + 1].style.height = key;
    barList[i].style.background = "#006400";
  }
};

insertionBtn.addEventListener("click", async function () {
  refreshSort();
  disableSortingBtn();
  disableNewArrayBtn();
  disableSizeSlider();
  await insertionSort();
  enableSortingBtn();
  enableNewArrayBtn();
  enableSizeSlider();
});
