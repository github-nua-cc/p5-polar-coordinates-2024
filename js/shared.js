const navbarContainer = document.getElementById("nav-container");
const navbar = document.getElementById("nav-bar");

navbarContainer.onmouseenter = () => {
  navbar.classList.remove("disappear");
  navbar.classList.add("appear");
};

navbarContainer.onmouseleave = () => {
  navbar.classList.remove("appear");
  navbar.classList.add("disappear");
};
