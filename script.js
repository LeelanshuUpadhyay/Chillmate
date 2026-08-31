document.addEventListener("DOMContentLoaded", () => {

  /* =========================================================
     PRELOADER
  ========================================================= */

  const loader = document.getElementById("loader");

  window.addEventListener("load", () => {
    setTimeout(() => {
      loader.classList.add("hidden");
    }, 700);
  });


  /* =========================================================
     SCROLL REVEAL
  ========================================================= */

  const revealElements = document.querySelectorAll(".reveal");

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {

        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);

        }

      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -50px 0px"
    }
  );

  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });


  /* =========================================================
     MOBILE MENU
  ========================================================= */

  const menuButton = document.querySelector(".menu-button");
  const mobileMenu = document.querySelector(".mobile-menu");
  const mobileLinks = document.querySelectorAll(".mobile-menu a");

  if (menuButton && mobileMenu) {

    menuButton.addEventListener("click", () => {

      mobileMenu.classList.toggle("active");
      menuButton.classList.toggle("active");

    });

    mobileLinks.forEach((link) => {

      link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");
        menuButton.classList.remove("active");

      });

    });

  }


  /* =========================================================
     NAVBAR SCROLL EFFECT
  ========================================================= */

  const navbar = document.querySelector(".navbar");

  window.addEventListener(
    "scroll",
    () => {

      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }

    },
    { passive: true }
  );


  /* =========================================================
     CURSOR GLOW
  ========================================================= */

  const cursorGlow = document.querySelector(".cursor-glow");

  if (cursorGlow && window.matchMedia("(pointer: fine)").matches) {

    document.addEventListener("mousemove", (event) => {

      cursorGlow.style.left = `${event.clientX}px`;
      cursorGlow.style.top = `${event.clientY}px`;

    });

  }


  /* =========================================================
     IMAGE PARALLAX
  ========================================================= */

  const bottle = document.querySelector(".hero-bottle");

  if (bottle && window.matchMedia("(pointer: fine)").matches) {

    document.addEventListener("mousemove", (event) => {

      const x = (event.clientX / window.innerWidth - 0.5);
      const y = (event.clientY / window.innerHeight - 0.5);

      bottle.style.transform =
        `translate(${x * 10}px, ${y * 10}px)`;

    });

  }


  /* =========================================================
     CONTACT FORM
  ========================================================= */

  const contactForm = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");

  if (contactForm) {

    contactForm.addEventListener("submit", (event) => {

      event.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !message) {

        formStatus.textContent =
          "Please complete the required fields.";

        return;

      }

      formStatus.textContent =
        "Thank you. Your message has been prepared.";

      /*
        This demo does NOT send email automatically.

        To receive messages, connect this form later to:
        Formspree / EmailJS / another form backend.
      */

      contactForm.reset();

    });

  }


  /* =========================================================
     BACK TO TOP
  ========================================================= */

  const backTop = document.querySelector(".back-top");

  if (backTop) {

    backTop.addEventListener("click", (event) => {

      event.preventDefault();

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    });

  }


  /* =========================================================
     PRE-ORDER BUTTON CHECK
  ========================================================= */

  const preorderButtons =
    document.querySelectorAll(
      'a[href="YOUR_PREORDER_LINK_HERE"]'
    );

  preorderButtons.forEach((button) => {

    button.addEventListener("click", (event) => {

      event.preventDefault();

      alert(
        "Your ChillMate pre-order link has not been connected yet. Replace YOUR_PREORDER_LINK_HERE with your actual pre-order URL."
      );

    });

  });


  /* =========================================================
     IMAGE ERROR HANDLING
  ========================================================= */

  const images = document.querySelectorAll("img");

  images.forEach((image) => {

    image.addEventListener("error", () => {

      if (
        image.src.includes("YOUR_CHILLMATE_BOTTLE_IMAGE_URL") ||
        image.src.includes("YOUR_FOUNDER_IMAGE_URL")
      ) {

        image.style.opacity = "0.15";

      }

    });

  });


  /* =========================================================
     ACTIVE NAVIGATION
  ========================================================= */

  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");

  const sectionObserver = new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          navLinks.forEach((link) => {
            link.classList.remove("active");
          });

          const activeLink =
            document.querySelector(
              `.nav-links a[href="#${entry.target.id}"]`
            );

          if (activeLink) {
            activeLink.classList.add("active");
          }

        }

      });

    },
    {
      threshold: 0.35
    }
  );

  sections.forEach((section) => {
    sectionObserver.observe(section);
  });


  /* =========================================================
     KEYBOARD ACCESSIBILITY
  ========================================================= */

  document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

      if (mobileMenu) {
        mobileMenu.classList.remove("active");
      }

      if (menuButton) {
        menuButton.classList.remove("active");
      }

    }

  });

});