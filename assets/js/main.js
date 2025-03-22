const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Handle select
$(".select-language").addEventListener("click", function (e) {
  this.classList.toggle("show");
  e.stopPropagation();
});

$$(".select-language__option").forEach((element) => {
  element.addEventListener("click", function (e) {
    e.stopPropagation();
    const focusUrl = this.firstElementChild.currentSrc;
    const focusAlt = this.firstElementChild.alt;
    const selectValue =
      $(".select-language").firstElementChild.firstElementChild;

    selectValue.src = focusUrl;
    selectValue.alt = focusAlt;

    $(".select-language").classList.remove("show");
  });
});

// Handle tabs
$$(".toolrange__tab").forEach((tab, i) => {
  tab.addEventListener("click", function () {
    let thisTab = this.dataset.tab;

    $$(".toolrange__tab").forEach((tab2, i2) => {
      if (i !== i2) {
        tab2.classList.remove("tab-active");
      }
    });

    this.classList.add("tab-active");

    $$(".toolrange__view").forEach((view) => {
      let thisView = view.dataset.viewTab;
      if (thisTab === thisView) {
        view.classList.add("view-active");
      } else {
        view.classList.remove("view-active");
      }
    });
  });
});
