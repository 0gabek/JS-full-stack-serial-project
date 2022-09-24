function tab() {
  // TABS
  const tabs = document.querySelectorAll(".tabheader__item"),
    tabsContent = document.querySelectorAll(".tabcontent");

  function hideTabContent() {
    tabsContent.forEach((item) => {
      item.classList.add("hide");
      item.classList.remove("show");
    });
    tabs.forEach((item) => item.classList.remove("tabheader__item_active"));
  }
  function showTabContent(i = 0) {
    tabsContent[i].classList.add("show", "fade");
    tabsContent[i].classList.remove("hide");
    tabs[i].classList.add("tabheader__item_active");
  }
  hideTabContent();
  showTabContent();

  tabs.forEach((item, idx) => {
    item.addEventListener("click", () => {
      hideTabContent();
      showTabContent(idx);
    });
  });
}
export default tab;
