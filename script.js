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

// carousel
$(document).ready(function () {
  $(".carousel").slick({
    slidesToShow: 3,
    dots: false,
    centerMode: true,
  });
  // edit next and prev
  $(".slick-next-mv").click(function () {
    $(".slick-slider").slick("slickNext");
  });
  $(".slick-prev-mv").click(function () {
    $(".slick-slider").slick("slickPrev");
  });
});

window.onscroll = function () {
  pageScroll();
};
