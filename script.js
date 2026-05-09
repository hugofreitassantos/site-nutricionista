// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Header scroll effect
const header = document.querySelector("header");

let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  // background do header
  if (currentScroll > 50) {
    header.style.background = "rgba(255, 255, 255, 0.98)";
  } else {
    header.style.background = "rgba(255, 255, 255, 0.95)";
  }

  // esconder ao descer
  if (currentScroll > lastScroll && currentScroll > 100) {
    header.classList.add("header-hidden");
  } else {
    header.classList.remove("header-hidden");
  }

  lastScroll = currentScroll;
});

document.querySelectorAll(".cta-button").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    window.open(
      "https://wa.me/55829?text=Olá! Gostaria de agendar uma consulta.",
      "_blank",
    );
  });
});

// WhatsApp button
document.querySelectorAll(".btn-primary").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    window.open(
      "https://wa.me/55829?text=Olá! Gostaria de agendar uma consulta.",
      "_blank",
    );
  });
});


function menuShow() {
    let menuMobile =document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "img/menu.png";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src ="img/fechar.png";
    }
}