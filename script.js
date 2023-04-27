const pageScroll = () => {
  const winScroll =
    document.body.scrollTop || document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  document.querySelector(".progress-red").style.width = scrolled + "%";
  document.querySelector(".ellipse-icon").style.left = scrolled + "%";
};

// smooth scroll
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const section = document.querySelector(link.getAttribute("href"));
    window.scrollTo({
      top: section.offsetTop,
      behavior: "smooth",
    });
  });
});

window.onscroll = function () {
  pageScroll();
};
