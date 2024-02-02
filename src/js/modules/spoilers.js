const spoilerTriggers = document.querySelectorAll(".spoiler-trigger");

spoilerTriggers.forEach(trigger => {
  if (trigger) {
    trigger.addEventListener("click", showSpoiler);
  }
});

function showSpoiler() {
  this.classList.toggle("is-active");
  const spoilerContent = this.nextElementSibling;
  spoilerContent.classList.toggle("is-expanded");
  const isExpanded = spoilerContent.classList.contains("is-expanded");
  spoilerContent.style.maxHeight = isExpanded ? `${spoilerContent.scrollHeight}px` : "0px";
  this.setAttribute("aria-expanded", isExpanded ? true : false);
  spoilerContent.setAttribute("aria-hidden", isExpanded ? false : true);
}
