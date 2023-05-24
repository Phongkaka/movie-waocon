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
const navLinks = document.querySelectorAll("#linkToContent a");

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
  $('.works-media-list').slick({
    dots: false,
    infinite: true,
    speed: 300,
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          touchMove: false,
        },
      },
    ],
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

//send Email
function sendEmail(event) {
  event.preventDefault();
  const check = document.getElementById("contact-checkbox");
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const nameCompany = document.getElementById("name-company").value;
  const department = document.getElementById("department").value;
  const phone = document.getElementById("phone").value;
  const inquiry = document.getElementById("inquiry").value;
  const videoProduct = document.getElementById("video-product").value;
  const contentInquiry = document.getElementById("content-inquiry").value;
  let inquiryText = "";
  switch (inquiry) {
    case "1":
      inquiryText = "インタビュー動画";
      break;
    case "2":
      inquiryText = "イメージムービー";
      break;
    case "3":
      inquiryText = "サービス紹介ムービー";
      break;
    case "4":
      inquiryText = "プロモーションムービー";
      break;
    case "5":
      inquiryText = "その他（「お問い合わせ内容」欄にご記入ください）";
  }
  let videoProductText = "";
  switch (videoProduct) {
    case "1":
      videoProductText = "インタビュー動画";
      break;
    case "2":
      videoProductText = "イメージムービー";
      break;
    case "3":
      videoProductText = "サービス紹介ムービー";
      break;
    case "4":
      videoProductText = "プロモーションムービー";
      break;
    case "5":
      videoProductText = "その他（「お問い合わせ内容」欄にご記入ください）";
  }
  var params = {
    name: name,
    email: email,
    nameCompany: nameCompany,
    department: department,
    phone: phone,
    inquiry: inquiryText,
    videoProduct: videoProductText,
    contentInquiry: contentInquiry,
  };
  if (check.checked) {
    const serviceID = "service_uqdomah";
    const templateID = "template_w2hm2q3";
    emailjs
      .send(serviceID, templateID, params)
      .then((res) => {
        window.location.href = "thanks-page.html";
      })
      .catch((err) => alert(err));
  } else alert("会社のポリシーに同意してください！");
}

// css menu hamburger
function toggleMenu() {
  let menu = document.getElementById("menu");
  let hamburgerIcon = document.querySelector(".hamburger-icon");
  let itemMenu = document.querySelector(".navbar-link");
  let closeIcon = document.querySelector(".close-icon");
  let menuSocial = document.querySelector(".menu-social-mb");

  menu.classList.toggle("show");
  hamburgerIcon.classList.toggle("hide");
  closeIcon.classList.toggle("show");
  menuSocial.classList.toggle("flex");
  itemMenu.classList.toggle("hide");
}
