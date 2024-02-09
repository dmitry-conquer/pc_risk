const currentUrl = window.location.pathname.slice(1);
const menuItems = document.querySelectorAll(".menu-link");
menuItems.forEach(item => {
  const url = item.getAttribute("href");
  if (currentUrl === url) {
    item.classList.add("current-page");
  }
});
