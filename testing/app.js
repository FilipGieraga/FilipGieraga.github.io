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
  distance: "60px",
  duration: 2500,
  delay: 200,
  // reset: true,
  easing: "ease-in",
});

sr.reveal(`.greeting-wrapper`, { origin: "top" });
sr.reveal(`.left-column`, { origin: "left", delay: 600, distance: "100px" });
sr.reveal(`.right-column`, {
  origin: "right",
  delay: 600,
  distance: "100px",
});
// sr.reveal(`.main-container`, { delay: 700, origin: "left" });
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

sr.reveal(`.left-transition`, {
  rotate: {
    x: -20,
    y: -20,
    z: -20,
  },

  delay: 1200,
});

sr.reveal(`.right-transition`, {
  rotate: {
    x: 20,
    y: 20,
    z: 20,
  },
  delay: 1200,
});

// sr.reveal(`.specs__data, .discount__animate`, {
//   origin: "left",
//   interval: 100,
// });
// sr.reveal(`.specs__img, .discount__img`, { origin: "right" });
// sr.reveal(`.case__img`, { origin: "top" });
// sr.reveal(`.case__data`);
