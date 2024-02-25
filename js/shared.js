const navbarContainer = document.getElementById("nav-container");
const navbar = document.getElementById("nav-bar");
const shapeTitle = document.getElementById("shape-title");

// navbar.onmouseleave = () => {
//   navbarContainer.classList.remove("appear");
//   navbarContainer.classList.add("disappear");
// };

// navbar.onmouseenter = () => {
//   // setTimeout(() => {
//     navbarContainer.classList.remove("disappear");
//     navbarContainer.classList.add("appear");
//   // });
// };

// if (shapeTitle) {
//   shapeTitle.onmouseenter = () => {
//     shapeTitle.classList.remove("appear");
//     shapeTitle.classList.add("disappear");
//   };

//   shapeTitle.onmouseleave = () => {
//     shapeTitle.classList.remove("disappear");
//     shapeTitle.classList.add("appear");
//   };
// }

navbarContainer.onmouseenter = () => {
  navbar.classList.remove("disappear");
  navbar.classList.add("appear");
  if (shapeTitle) {
    // shapeTitle.classList.remove("appear");
    // shapeTitle.classList.add("disappear");
  }
};

navbarContainer.onmouseleave = () => {
  navbar.classList.remove("appear");
  navbar.classList.add("disappear");
  if (shapeTitle) {
    // shapeTitle.classList.remove("disappear");
    // shapeTitle.classList.add("appear");
  }
};
