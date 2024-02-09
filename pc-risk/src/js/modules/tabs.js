const tabs = document.querySelectorAll(".tab");

tabs.forEach(tab => {
  if (tab) {
    tab.addEventListener("click", e => {
      const target = e.target.closest("[data-tab-button]");
      if (!target) return;
      const buttonId = target.dataset.tabButton;
      const content = tab.querySelector(`[data-tab-content='${buttonId}']`);
      if (!content) return;

      const buttons = tab.querySelectorAll("[data-tab-button]");
      buttons.forEach(button => {
        button.disabled = false;
        button.classList.remove("active-tab-button");
      });

      const contents = tab.querySelectorAll("[data-tab-content]");
      contents.forEach(el => {
        el.style.display = "none";
      });

      target.classList.add("active-tab-button");
      target.disabled = true;
      content.style.display = "block";
    });
  }
});
