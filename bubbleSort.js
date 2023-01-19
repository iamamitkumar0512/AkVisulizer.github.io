const bubbleBtn = document.querySelector("#bubble");

const bubbleSort = async function () {
  const barList = document.querySelectorAll(".bar");
  for (let i = 1; i < barList.length; i++) {
    for (let j = 0; j < barList.length - i; j++) {
      barList[j].style.background = "#5072A7";
      barList[j + 1].style.background = "#5072A7";
      await waitforme(delay);
      if (
        parseInt(barList[j].style.height) >
        parseInt(barList[j + 1].style.height)
      ) {
        await waitforme(delay);
        barList[j].style.background = "#FBCEB1";
        barList[j + 1].style.background = "#FBCEB1";
        await waitforme(delay);
        swap(barList[j], barList[j + 1]);
      }
      barList[j].style.background = "aqua";
      barList[j + 1].style.background = "aqua";
    }
    barList[barList.length - i].style.background = "#006400";
  }
  barList[0].style.background = "#006400";
};

bubbleBtn.addEventListener("click", async function () {
  refreshSort();
  disableSortingBtn();
  disableNewArrayBtn();
  disableSizeSlider();
  await bubbleSort();
  enableSortingBtn();
  enableNewArrayBtn();
  enableSizeSlider();
});
