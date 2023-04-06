const toggleButton = document.querySelector('input[type="checkbox"]');
const toggleIcon = document.querySelector(".theme-toggle__icon");
const photo1 = document.getElementById("photo-1");
const photo2 = document.getElementById("photo-2");
const photo3 = document.getElementById("photo-3");
const photo4 = document.getElementById("photo-4");

console.log(toggleIcon);

function imageMode(mode) {
  photo1.src = `images/undraw_shopping__bags_${mode}.svg`;
  photo2.src = `images/undraw_healthy_habit_${mode}.svg`;
  photo3.src = `images/undraw_traveling_${mode}.svg`;
  photo4.src = `images/undraw_appreciation_${mode}.svg`;
}

const lightMode = () => {
  imageMode("light");
  console.log(toggleIcon);
  toggleIcon.classList.replace("fa-moon", "fa-sun");
};

const darkMode = () => {
  imageMode("dark");
  toggleIcon.classList.replace("fa-sun", "fa-moon");
};

const changeTheme = (event) => {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    darkMode();
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    lightMode();
  }
};

toggleButton.addEventListener("change", changeTheme);

const theme = localStorage.getItem("theme");
if (theme) {
  document.documentElement.setAttribute("data-theme", theme);

  if (theme === "dark") {
    toggleButton.checked = true;
    darkMode();
  }
}
