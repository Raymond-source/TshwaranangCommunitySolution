// script.js - Main JavaScript for Tshwaranang Community Solution

document.addEventListener("DOMContentLoaded", function () {
  // Set current year in footer
  const yearSpan = document.getElementById("currentYear");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const navLinks = document.querySelector(".nav-links");

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener("click", function () {
      navLinks.classList.toggle("active");
      const icon = mobileMenuBtn.querySelector("i");
      if (icon) {
        icon.classList.toggle("fa-bars");
        icon.classList.toggle("fa-times");
      }
    });

    // Close menu when clicking a link
    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        const icon = mobileMenuBtn.querySelector("i");
        if (icon) {
          icon.classList.add("fa-bars");
          icon.classList.remove("fa-times");
        }
      });
    });
  }

  // Close mobile menu on window resize (desktop)
  window.addEventListener("resize", function () {
    if (
      window.innerWidth > 768 &&
      navLinks &&
      navLinks.classList.contains("active")
    ) {
      navLinks.classList.remove("active");
      const icon = mobileMenuBtn?.querySelector("i");
      if (icon) {
        icon.classList.add("fa-bars");
        icon.classList.remove("fa-times");
      }
    }
  });

  // Initialize Hero Slideshow
  if (document.querySelector(".hero-slider")) {
    setTimeout(() => {
      if (typeof Swiper !== "undefined") {
        new Swiper(".heroSwiper", {
          loop: true,
          autoplay: {
            delay: 5000,
            disableOnInteraction: false,
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          effect: "fade",
          fadeEffect: {
            crossFade: true,
          },
        });
      }
    }, 100);
  }

  // Initialize Partners Swiper
  if (document.querySelector(".partnersSwiper")) {
    setTimeout(() => {
      if (typeof Swiper !== "undefined") {
        new Swiper(".partnersSwiper", {
          slidesPerView: 1,
          spaceBetween: 20,
          loop: true,
          autoplay: {
            delay: 4000,
            disableOnInteraction: false,
          },
          pagination: {
            el: ".partners-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".partners-next",
            prevEl: ".partners-prev",
          },
          breakpoints: {
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          },
        });
      }
    }, 100);
  }

  // Render values on home page
  if (typeof renderValues !== "undefined") {
    renderValues("valuesContainer");
    renderValues("coreValuesContainer");
  }

  // Render services
  if (typeof renderServices !== "undefined") {
    renderServices("servicesContainer");
  }

  // Render team
  if (typeof renderTeam !== "undefined") {
    renderTeam("teamContainer");
  }

  // Animate stats numbers
  const statNumbers = document.querySelectorAll(".stat-number");
  if (statNumbers.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const target = parseInt(el.getAttribute("data-target"));
            if (target && !el.classList.contains("animated")) {
              el.classList.add("animated");
              animateNumber(el, 0, target, 1500);
            }
          }
        });
      },
      { threshold: 0.5 },
    );

    statNumbers.forEach((el) => observer.observe(el));
  }

  function animateNumber(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const current = Math.floor(progress * (end - start) + start);
      element.textContent = current;
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }

  // WhatsApp Floating Button
  const whatsappFloat = document.getElementById("whatsapp-float");
  if (whatsappFloat && typeof getWhatsAppUrl !== "undefined") {
    whatsappFloat.innerHTML = `
      <a href="${getWhatsAppUrl()}" target="_blank" class="whatsapp-float-link" aria-label="Chat on WhatsApp">
        <i class="fab fa-whatsapp"></i>
      </a>
      <div class="whatsapp-float-text">Chat with us</div>
    `;
  }

  // Set active navigation based on current page
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navItems = document.querySelectorAll(".nav-links a");
  navItems.forEach((item) => {
    const href = item.getAttribute("href");
    // Skip donate button links and empty hrefs
    if (href === "#" || href === null || href === "") return;

    // Check if the link matches the current page
    if (href === currentPage) {
      item.classList.add("active");
    }
    // Handle index.html as home page
    else if (currentPage === "index.html" && href === "index.html") {
      item.classList.add("active");
    }
    // Handle when current page is empty (root)
    else if (
      (currentPage === "" || currentPage === "/") &&
      href === "index.html"
    ) {
      item.classList.add("active");
    }
    // Remove active class from others
    else {
      item.classList.remove("active");
    }
  });

  // Add smooth scrolling to anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId !== "#") {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    });
  });

  // Add scroll effect to header
  const header = document.getElementById("main-header");
  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  }

  // Initialize lazy loading for images
  const images = document.querySelectorAll("img[data-src]");
  const imageObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.getAttribute("data-src");
          img.removeAttribute("data-src");
          imageObserver.unobserve(img);
        }
      });
    },
    { rootMargin: "50px" },
  );

  images.forEach((img) => imageObserver.observe(img));

  // Add form validation for contact forms
  const contactForms = document.querySelectorAll(".contact-form form");
  contactForms.forEach((form) => {
    form.addEventListener("submit", function (e) {
      const requiredFields = form.querySelectorAll("[required]");
      let isValid = true;

      requiredFields.forEach((field) => {
        if (!field.value.trim()) {
          isValid = false;
          field.classList.add("error");
        } else {
          field.classList.remove("error");
        }
      });

      if (!isValid) {
        e.preventDefault();
        alert("Please fill in all required fields.");
      }
    });
  });

  console.log("Tshwaranang Community Solution website initialized");
});
