let dropDown = function () {
  const dropdowns = document.querySelectorAll(".dropdown");
  dropdowns.forEach((dropdown) => {
    const menuBtn = dropdown.querySelector(".dropdown-trigger");
    const menu = dropdown.querySelector(".dropdown-menu");

    menuBtn.addEventListener("click", () => menu.classList.toggle("visible"));
  });
};

export { dropDown };
