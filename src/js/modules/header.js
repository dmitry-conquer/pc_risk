const burgerButton = document.getElementById("burger-button");
const burgerInner = document.getElementById("burger-inner");
const burgerCross = document.getElementById("burger-cross");
const burgerMenu = document.getElementById("header-nav");
const openSearchButton = document.getElementById("open-search");
const searchForm = document.getElementById("search-form");

console.log(burgerInner);
if (burgerButton && burgerMenu) {
  document.body.addEventListener("click", toggleHeaderActions);
}

function toggleHeaderActions(e) {
  if (e.target.closest("#burger-button")) {
    if (!burgerMenu.classList.contains("active-menu")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = null;
    }
    burgerCross.classList.toggle("active-burger");
    burgerInner.classList.toggle("active-burger");
    burgerMenu.classList.toggle("active-menu");
  } else if (!e.target.closest("#header-nav") && burgerInner.classList.contains("active-burger")) {
    document.body.style.overflow = null;
    burgerCross.classList.remove("active-burger");
    burgerInner.classList.remove("active-burger");
    burgerMenu.classList.remove("active-menu");
  }

  if (e.target.closest("#open-search")) {
    searchForm.classList.add("is-open");
    openSearchButton.classList.add("is-hidden");
    searchForm.querySelector("input").focus();
  } else if (!e.target.closest("#search-form") && searchForm.classList.contains("is-open")) {
    searchForm.classList.remove("is-open");
    openSearchButton.classList.remove("is-hidden");
  }
}
