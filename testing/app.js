let theme = localStorage.getItem("theme");

if (theme == null) {
  setTheme("light");
} else {
  setTheme(theme);
}

let themeDots = document.getElementsByClassName("theme-dot");

for (var i = 0; themeDots.length > i; i++) {
  themeDots[i].addEventListener("click", function () {
    let mode = this.dataset.mode;
    setTheme(mode);
  });
}

function setTheme(mode) {
  if (mode == "light") {
    document.getElementById("theme-style").href = "styles/default.css";
  }

  if (mode == "blue") {
    document.getElementById("theme-style").href = "styles/blue.css";
  }

  if (mode == "yellow") {
    document.getElementById("theme-style").href = "styles/yellow.css";
  }

  if (mode == "purple") {
    document.getElementById("theme-style").href = "styles/purple.css";
  }

  localStorage.setItem("theme", mode);
}

const sr = ScrollReveal({
  distance: "0px",
  duration: 2500,
  delay: 200,
  // reset: true,
  useDelay: "onload",
  easing: "ease-in",
});



sr.reveal(`.post`, {
  interval: 300,
  origin: "bottom",
  rotate: {
    x: 100,
    y: 100,
    z: 100,
  },
  duration: 1000,
});


