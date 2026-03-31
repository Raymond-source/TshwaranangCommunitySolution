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

  // Initialize Slideshow
  if (
    document.querySelector(".hero-slider") &&
    typeof initSlideshow !== "undefined"
  ) {
    initSlideshow();

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

  // Note: Contact form handler is now handled by the custom script in contact.html
  // This prevents conflict with the modal confirmation

  // Set active navigation based on current page (supports both index.html and home.html)
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navItems = document.querySelectorAll(".nav-links a");
  navItems.forEach((item) => {
    const href = item.getAttribute("href");
    // Skip donate button links
    if (href === "#" || href === null) return;

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

  console.log("Tshwaranang Community Solution website initialized");
});
