const navLinks = document.querySelectorAll(".nav-list a span");
const openMenu = document.getElementById("openMenu");
const responsiveNav = document.querySelector(".nav-list");
const scrollHome = document.getElementById("scrollHome");
const scrollServices = document.getElementById("scrollServices");
const scrollProjects = document.getElementById("scrollProjects");
const scrollContact = document.getElementById("scrollContact");
const scrollNavs = document.querySelectorAll(".scroll-navs");

const menu = document.querySelector(".menu");
const allMenuBar = document.querySelectorAll(".menu-bar");
const menuBar1 = document.getElementById("menuBar1");
const menuBar2 = document.getElementById("menuBar2");
const menuBar3 = document.getElementById("menuBar3");
let clickcount = 0;

menu.addEventListener("click", function () {
  clickcount++;
  if (clickcount % 2 === 0) {
    responsiveNav.classList.remove("active");
    menuBar2.style.opacity = 1;
    menuBar1.style.transform = "translateY(0) rotate(0)";
    menuBar3.style.transform = "translateY(0) rotate(0)";
  } else {
    responsiveNav.classList.add("active");
    menuBar2.style.opacity = 0;
    menuBar1.style.transform = "translateY(11px) rotate(225deg)";
    menuBar3.style.transform = "translateY(-11px) rotate(-225deg)";
  }
});

navLinks.forEach((e) => {
  e.addEventListener("click", function () {
    navLinks.forEach((links) => {
      links.classList.remove("active");
    });
    e.classList.add("active");
  });
});

window.addEventListener("load", function () {
  const loadingScreen = document.getElementById("loading-screen");

  setTimeout(() => {
    loadingScreen.classList.add("hidden");

    setTimeout(() => {
      loadingScreen.style.display = "none";
    }, 500);
  }, 2000);
});

// ვამატებთ სქროლის მოვლენის დამმუშავებელს, რომელიც შესრულდება ყოველი სქროლის დროს.
window.addEventListener("scroll", () => {
  // ვიღებთ მიმდინარე სქროლის პოზიციას და ვუმატებთ 100 პიქსელს (ჰედერის სიმაღლის გათვალისწინებით).
  let fromTop = window.scrollY + 100;

  // ვამოწმებთ თითოეულ ნავიგაციის ბმულს ინდივიდუალურად.
  scrollNavs.forEach((e) => {
    // ვპოულობთ ბმულთან დაკავშირებულ სექციას 'href' ატრიბუტის მიხედვით.
    const section = document.querySelector(e.getAttribute("href"));

    // offsetTop არის DOM ელემენტის თვისება, რომელიც გვაძლევს ელემენტის ზედა ნაწილის პოზიციას პიქსელებში

    // offsetHeight არის DOM ელემენტის თვისება, რომელიც გვაძლევს ელემენტის საერთო სიმაღლეს პიქსელებში.
    // offsetHeight არ მოიცავს მარჯინს

    // ვამოწმებთ, არის თუ არა სექცია სქროლის პოზიციაში:

    if (
      // სექციის ზედა საზღვარი (offsetTop) არის 'fromTop + 300'-ზე დაბლა.
      section.offsetTop <= fromTop + 300 &&
      // სექციის ქვედა საზღვარი (offsetTop + offsetHeight) არის 'fromTop + 300'-ზე მაღლა.
      section.offsetTop + section.offsetHeight > fromTop + 300
    ) {
      // თუ პირობა შესრულდა, ამატებს 'active' კლასს
      e.classList.add("scroll-active");
      e.classList.add("active");
    } else {
      // თუ პირობა არ შესრულდა, აშორებს 'active' კლასს
      e.classList.remove("scroll-active");
      e.classList.remove("active");
    }
  });
});

const texts = ["Frontend Developer", "Graphic Designer"];
const target = document.getElementById("typewriter");

const speed = 150;

let index = 0;
let textIndex = 0;
let isDeleting = false;

function type() {
  const currentText = texts[textIndex];

  if (!isDeleting) {
    target.textContent = currentText.slice(0, index++);
    if (index > currentText.length) {
      isDeleting = true;
      setTimeout(() => {
        type();
      }, 1000);
      return;
    }
  } else {
    target.textContent = currentText.slice(0, index--);

    if (index === 0) {
      isDeleting = false;

      textIndex++;
      if (textIndex >= texts.length) {
        textIndex = 0;
      }
    }
  }
  setTimeout(type, isDeleting ? speed / 2 : speed);
}
window.addEventListener("load", type());

const themeToggle = document.getElementById("theme-toggle");
const icon = themeToggle.querySelector("i");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");

  if (document.body.classList.contains("light-theme")) {
    icon.classList.replace("fa-moon", "fa-sun");
  } else {
    icon.classList.replace("fa-sun", "fa-moon");
  }
});

const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
});

scrollToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const bar = document.getElementById("scrollProgressBar");

window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;
  const totalHeight = document.body.scrollHeight - window.innerHeight;
  const progress = (scrolled / totalHeight) * 100;

  bar.style.width = `${progress}%`;
});
