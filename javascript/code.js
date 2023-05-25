window.onload = function () {
  let menuOpenButton = document.querySelector(".nav-toggle");
  let navMenu = document.querySelector(".nav-menu");
  let menuCloseButton = document.querySelector(".nav-close");
  let navLinks = document.querySelectorAll(".nav-link");

  // SHOW / HIDE MENU
  if (menuOpenButton) {
    menuOpenButton.addEventListener("click", () => {
      navMenu.classList.add("show-menu");
    });
  }
  if (menuCloseButton) {
    menuCloseButton.addEventListener("click", () => {
      navMenu.classList.remove("show-menu");
    });
  }

  // HIDE MENU WHEN CLICK ON EACH LINK
  function linkAction() {
    navMenu.classList.remove("show-menu");
  }

  navLinks.forEach((link) => link.addEventListener("click", linkAction));

  // TOGGLE SKILLS LIST
  let skillsContent = document.getElementsByClassName(".skills-content");
  let skillsHeader = document.querySelectorAll(".skills-header");

  function toggleSkill() {
    let itemClass = this.parentNode.className;

    for (let i = 0; i < skillsContent.length; i++) {
      skillsContent[i].className = "skills-content skill-close";
    }

    if (itemClass === "skills-content skill-close") {
      this.parentNode.className = "skills-content skill-open";
    } else {
      this.parentNode.className = "skills-content skill-close";
    }
  }

  skillsHeader.forEach((skills) => {
    skills.addEventListener("click", toggleSkill);
  });

  // SHOW / HIDE QUALIFICATIONS
  let tabs = document.querySelectorAll("[data-target]");
  let tabContents = document.querySelectorAll("[data-content]");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = document.querySelector(tab.dataset.target);
      tabContents.forEach((tabContent) => {
        tabContent.classList.remove("qualifications-active");
      });

      target.classList.add("qualifications-active");

      tab.classList.add("qualifications-active");
    });
  });

  // SHOW/HIDE MODAL
  let modalViews = document.querySelectorAll(".services-modal");
  let modalButtons = document.querySelectorAll(".services-button");
  let modalClose = document.querySelectorAll(".services-modal-close");

  let modalFunction = function (modalClick) {
    modalViews[modalClick].classList.add("active-modal");
  };

  let modalCloseFunction = function (modalClick) {
    modalViews[modalClick].classList.remove("active-modal");
  };

  modalButtons.forEach((item, i) => {
    item.addEventListener("click", () => {
      modalFunction(i);
    });
  });

  modalClose.forEach((item, i) => {
    item.addEventListener("click", () => {
      modalCloseFunction(i);
    });
  });

  // SWIPER
  let swiper = new Swiper(".portfolio-container", {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // Footer text
  let footerText = document.querySelector(".copy-rights");
  let year = new Date().getFullYear();

  footerText.innerHTML = `All rights reserved ${year}. Made with love by Mohamed`;

  // SWITCH THEME
  let themeButton = document.getElementById("theme-button");
  let darkTheme = "dark-theme";
  let iconTheme = "uil-sun";

  let selectedTheme = localStorage.getItem("selected-theme");
  let selectedIcon = localStorage.getItem("selected-icon");

  let getCurrentTheme = () =>
    document.body.classList.contains(darkTheme) ? "dark" : "light";
  let getCurrentIcon = () =>
    themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

  if (selectedTheme) {
    document.body.classList[selectedTheme == "dark" ? "add" : "remove"](
      darkTheme
    );
    themeButton.classList[selectedIcon == "uil-moon" ? "add" : "remove"](
      iconTheme
    );
  }

  themeButton.addEventListener("click", () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
  });
};
