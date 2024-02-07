const burgerButton = document.getElementById("burger-button");
const closeMenu = document.getElementById("close-menu");
const burgerMenu = document.getElementById("header-nav");
const openSearchButton = document.getElementById("open-search");
const searchForm = document.getElementById("search-form");

function toggleHeaderActions(e) {
  if (e.target.closest("#burger-button")) {
    burgerMenu.classList.add("active-menu");
    burgerButton.style.display = "none";
    closeMenu.style.display = "block";
  } else if (e.target.closest("#close-menu") || (!e.target.closest("#header-nav") && burgerMenu.classList.contains("active-menu"))) {
    burgerMenu.classList.remove("active-menu");
    burgerButton.style.display = "block";
    closeMenu.style.display = "none";
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

if (burgerButton && burgerMenu) {
  document.body.addEventListener("click", toggleHeaderActions);
}
