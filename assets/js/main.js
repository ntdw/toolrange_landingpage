const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Handle search
$(".toolrange__input-search").addEventListener("input", function () {
  console.log("input search value: ", this.value);
});

$(".toolrange__header__search > input").addEventListener("focus", function () {
  $(".toolrange__header__search-wrapper").classList.add("show");
});

$(".box-input-wrapper > img").addEventListener("click", function () {
  $(".toolrange__header__search-wrapper").classList.remove("show");
});

$$(".toolrange__header__search-suggestions > li").forEach((item) => {
  item.addEventListener("click", function () {
    $(".toolrange__input-search").value = this.innerText;
  });
});

// Handle select language
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

$$('.toolrange__prod-detail__description-tab').forEach((tab, i) => {
  tab.addEventListener("click", function () {
    
    let thisTab = this.dataset.tab;

    $$(".toolrange__prod-detail__description-tab").forEach((tab2, i2) => {
      if (i !== i2) {
        tab2.classList.remove("tab-active");
      }
    });

    this.classList.add("tab-active");

    $$(".toolrange__prod-detail__description-view").forEach((view) => {
      let thisView = view.dataset.view;
      if (thisTab === thisView) {
        view.classList.add("view-active");
      } else {
        view.classList.remove("view-active");
      }
    });
  });
})

// Handle show categories
$(".categories-page__button-more") &&
  $(".categories-page__button-more").addEventListener("click", function () {
    $(".toolrange__categories-page__content").classList.add("show-all");
    this.classList.add("hide");
  });

// Handle select custom
$$(".select-common") &&
  $$(".select-common").forEach((select) => {
    select.addEventListener("click", function (e) {
      this.classList.toggle("show");
      e.stopPropagation();

      if (e.target.tagName === "DATA") {
        this.firstElementChild.value = e.target.value;
      }
    });
  });

$(".toolrange__categories-detail__sort") &&
  $(".toolrange__categories-detail__sort").addEventListener(
    "click",
    function (e) {
      this.classList.toggle("show");
      e.stopPropagation();

      if (e.target.tagName === "DATA") {
        this.querySelector(".sort-by__value").innerText = e.target.value;
      }
    }
  );

$$(".btn-page-number") &&
  $$(".btn-page-number").forEach((page) => {
    page.addEventListener("click", function () {
      $$(".btn-page-number").forEach((page2) => {
        page2.classList.remove("btn-active");
      });
      this.classList.add("btn-active");
    });
  });
