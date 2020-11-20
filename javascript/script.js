const bodyColumn = document.querySelectorAll(".body-colu");

window.addEventListener("scroll", function () {
  const windowTop = window.pageYOffset + (window.innerHeight * 3) / 4;

  bodyColumn.forEach((e) => {
    if (windowTop > 1750) {
      e.classList.add("animate");
    } else {
      e.classList.remove("animate");
    }
  });
});
