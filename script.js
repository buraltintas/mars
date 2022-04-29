"use strict";

window.onload = function () {
  document.getElementById("button").onclick = function () {
    document.getElementById("modal").style.opacity = 0;
    document.getElementById("modal").style.pointerEvents = "none";
    document.getElementById("modal").style.visibility = "hidden";
  };
};

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  spaceBetween: 30,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

let endDate = new Date("May 07, 2022 00:00:00").getTime();

const counter = setInterval(function () {
  let now = new Date().getTime();
  let timeleft = endDate - now;

  let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days + " Gün ";
  document.querySelector(".hours").innerHTML = hours + " Saat";
  document.querySelector(".mins").innerHTML = minutes + " Dakika";
  document.querySelector(".secs").innerHTML = seconds + " Saniye";

  document.querySelector(".days1").innerHTML = days + " Gün ";
  document.querySelector(".hours1").innerHTML = hours + " Saat";
  document.querySelector(".mins1").innerHTML = minutes + " Dakika";
  document.querySelector(".secs1").innerHTML = seconds + " Saniye";

  if (timeleft < 0) {
    clearInterval(counter);
    document.querySelector(".days").innerHTML = "";
    document.querySelector(".hours").innerHTML = "";
    document.querySelector(".mins").innerHTML = "";
    document.querySelector(".secs").innerHTML = "";
  }
}, 1000);

const btnscrollFamily = document.querySelector(".goto-family");
const section1 = document.querySelector(".section-family");
btnscrollFamily.addEventListener("click", function () {
  const s1coords = section1.getBoundingClientRect();

  window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: "smooth",
  });
});

const btnscroll1 = document.querySelector(".btn");

btnscroll1.addEventListener("click", function () {
  const s1coords = section1.getBoundingClientRect();

  window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: "smooth",
  });
});

const btnscrollPlaymate = document.querySelector(".goto-playmate");
const sectionPlaymate = document.querySelector(".section-playmate");

btnscrollPlaymate.addEventListener("click", function () {
  const s2coords = sectionPlaymate.getBoundingClientRect();

  window.scrollTo({
    left: s2coords.left + window.pageXOffset,
    top: s2coords.top + window.pageYOffset,
    behavior: "smooth",
  });
});

const btnRemain = document.querySelector(".goto-remaining");
const sectionRemain = document.querySelector(".section-remaining");

btnRemain.addEventListener("click", function () {
  const s3coords = sectionRemain.getBoundingClientRect();

  window.scrollTo({
    left: s3coords.left + window.pageXOffset,
    top: s3coords.top + window.pageYOffset,
    behavior: "smooth",
  });
});

const btnNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");

btnNav.addEventListener("click", function (e) {
  e.preventDefault();
  header.classList.toggle("nav-open");
});

const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    // e.preventDefault();
    const href = link.getAttribute("href");

    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    if (href !== "#") return;

    if (link.classList.contains("main-nav-link"))
      header.classList.toggle("nav-open");
  });
});
