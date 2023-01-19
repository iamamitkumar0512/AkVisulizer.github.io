const selectionBtn = document.querySelector("#selection");

const refreshSort = () => {
  const barList = document.querySelectorAll(".bar");
  for (let i = 0; i < barList.length; i++) {
    barList[i].style.background = "aqua";
  }
};

const selectionSort = async function () {
  const barList = document.querySelectorAll(".bar");
  for (let i = 0; i < barList.length; i++) {
    let minIndex = i;
    barList[minIndex].style.background = "#5072A7";
    await waitforme(delay);
    for (let j = i + 1; j < barList.length; j++) {
      barList[j].style.background = "#FBCEB1";
      await waitforme(delay);
      if (
        parseInt(barList[j].style.height) <
        parseInt(barList[minIndex].style.height)
      ) {
        if (minIndex !== i) {
          // new min_index is found so change prev minIndex color back to normal
          barList[minIndex].style.background = "aqua";
        }
        minIndex = j;
      } else {
        barList[j].style.background = "aqua";
      }
    }
    await waitforme(delay);
    swap(barList[minIndex], barList[i]);
    barList[minIndex].style.background = "aqua";
    barList[i].style.background = "#006400";
  }
};

selectionBtn.addEventListener("click", async function () {
  refreshSort();
  disableSortingBtn();
  disableNewArrayBtn();
  disableSizeSlider();
  await selectionSort();
  enableSortingBtn();
  enableNewArrayBtn();
  enableSizeSlider();
});
