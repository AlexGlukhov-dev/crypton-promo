const progress = document.getElementById("progressbar");
const upBtn = document.querySelector(".btn-up");

let totalHeight = document.body.scrollHeight - window.innerHeight;

window.addEventListener("scroll", () => {
  let progressHeight = (window.scrollY / totalHeight) * 100;
  progress.style.height = progressHeight + "%";
});

window.addEventListener("scroll", () => {


  if (window.scrollY > 100) {
    upBtn.classList.remove("visually-hidden")
    upBtn.style.opacity = 1;
  } else {
    upBtn.classList.add("visually-hidden")
    upBtn.style.opacity = 0;
  }
});


