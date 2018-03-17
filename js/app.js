var contactBtn = document.getElementById("menucontact");
var contact = document.getElementById("contact");
var homeBtn = document.getElementById("menuhome");
var home = document.querySelector("body");
var aboutBtn = document.getElementById("menuabout");
var about = document.getElementById("aboutUs");
var serviceBtn = document.getElementById("menuservice");
var service = document.getElementById("service");
var scrollTop = document.getElementById("scrolltop");
var header = document.querySelector("header");

// Scrolling
contactBtn.addEventListener("click", function () {
  contact.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});

homeBtn.addEventListener("click", function () {
  home.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});

aboutBtn.addEventListener("click", function () {
  about.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});

serviceBtn.addEventListener("click", function () {
  service.scrollIntoView({
    behavior: "smooth"
  });
});
scrollTop.addEventListener("click", function () {
  home.scrollIntoView({
    behavior: "smooth"
  });
});

window.addEventListener("scroll", function () {
  //header
  if (header.getBoundingClientRect().top < 200 && about.getBoundingClientRect().top > 200) {
    if (homeBtn.classList.contains("active")) {
    } else {
      homeBtn.classList.add("active");
    }
  } else {
    if (homeBtn.classList.contains("active")) {
      homeBtn.classList.remove("active");
    } else {
    }
  }
  //about
  if (about.getBoundingClientRect().top < 200 && service.getBoundingClientRect().top > 200) {
    if (aboutBtn.classList.contains("active")) {
    } else {
      aboutBtn.classList.add("active");
    }
  } else {
    if (aboutBtn.classList.contains("active")) {
      aboutBtn.classList.remove("active");
    } else {
    }
  }
  //service
  if (service.getBoundingClientRect().top < 200 && contact.getBoundingClientRect().top > 200) {
    if (serviceBtn.classList.contains("active")) {

    } else {
      serviceBtn.classList.add("active");
    }
  } else {
    if (serviceBtn.classList.contains("active")) {
      serviceBtn.classList.remove("active");
    } else {
    }
  } 
  //contact
  if (contact.getBoundingClientRect().top < 200 && contact.getBoundingClientRect().bottom > 0) {
    if (contactBtn.classList.contains("active")) {

    } else {
      contactBtn.classList.add("active");
    }
  } else {
    if (contactBtn.classList.contains("active")) {
      contactBtn.classList.remove("active");
    } else {

    }
  }// contact
});