/////////////////////////////
// SMOOTH SCROLLING ANIMATION
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile naviagtion
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

////////////////////
// MOBILE NAVIGATION
const btnNavEl = document.querySelector(".btn--mobile-nav");
const headerEl = document.querySelector(".section-navigation");
console.log(headerEl);

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

/////////////////////
// TESTIMONIAL SLIDER
var btn = document.getElementsByClassName("testimonial-btn");
var slide = document.getElementById("js-testimonial-slide");

btn[0].onclick = function () {
  slide.style.transform = "translateY(0px)";
  for (i = 0; i < 3; i++) {
    btn[i].classList.remove("testimonial-btn--active");
  }
  this.classList.add("testimonial-btn--active");
};

btn[1].onclick = function () {
  slide.style.transform = "translateY(-476px)";
  for (i = 0; i < 3; i++) {
    btn[i].classList.remove("testimonial-btn--active");
  }
  this.classList.add("testimonial-btn--active");
};

btn[2].onclick = function () {
  slide.style.transform = "translateY(-952px)";
  for (i = 0; i < 3; i++) {
    btn[i].classList.remove("testimonial-btn--active");
  }
  this.classList.add("testimonial-btn--active");
};

////////////////////
// FIXING SAFARI GAP
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
