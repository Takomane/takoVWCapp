window.addEventListener("scroll", () => {
  let content = document.querySelector(".hidden");
  let contentPosition = content.getBoundingClientRect().top;
  let screenPosition = window.innerHeight;
  if (contentPosition < screenPosition) {
    content.classList.add("div5animation");
  }
});

window.addEventListener("scroll", () => {
  let content = document.querySelector(".hidden2");
  let contentPosition = content.getBoundingClientRect().top;
  let screenPosition = window.innerHeight;
  if ((contentPosition = screenPosition)) {
    content.classList.add("div4animation");
  }
});

window.addEventListener("scroll", () => {
  let content = document.querySelector(".hidden1");
  let contentPosition = content.getBoundingClientRect().top;
  let screenPosition = window.innerHeight;
  if (contentPosition > screenPosition) {
    content.classList.add("div1animation");
  }
});
