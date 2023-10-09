// Nav Button Animation
const navButton = document.querySelectorAll(".designo-nav-button");

navButton.forEach((button) => {
  button.addEventListener("click", () => {
    const currentState = button.getAttribute("data-state");

    if (!currentState || currentState === "closed") {
      button.setAttribute("data-state", "opened");
      button.setAttribute("aria-expanded", "true");
    } else {
      button.setAttribute("data-state", "closed");
      button.setAttribute("aria-expanded", "false");
    }
  });
});

// Nav Button Triggers Nav Menu
function displayMobileNav() {
  const mobileNav = document.querySelectorAll(".designo-mobile-nav");

  mobileNav.forEach((nav) => {
    if (nav.style.display === 'none' || nav.style.display === '') {
      nav.style.display = 'block';
    } else {
      nav.style.display = 'none';
    }
  });
}

navButton.forEach((button) => {
  button.addEventListener('click', displayMobileNav);
});
