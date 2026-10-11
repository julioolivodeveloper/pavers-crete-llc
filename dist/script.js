const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");
const heroSlides = Array.from(document.querySelectorAll(".hero-bg"));
const contactModal = document.querySelector("[data-modal]");
const closeModalButtons = Array.from(document.querySelectorAll("[data-close-modal]"));
const contactTriggers = Array.from(document.querySelectorAll(".contact-trigger"));
const lightbox = document.querySelector("[data-lightbox-modal]");
const lightboxImage = document.querySelector("[data-lightbox-image]");
const lightboxCaption = document.querySelector("[data-lightbox-caption]");
const lightboxClose = document.querySelector("[data-close-lightbox]");
const galleryButtons = Array.from(document.querySelectorAll("[data-lightbox]"));

let currentSlide = 0;
let lastFocusedElement = null;

if (window.lucide) {
  window.lucide.createIcons();
}

const onScroll = () => {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 20);
};

window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

if (heroSlides.length > 1) {
  window.setInterval(() => {
    heroSlides[currentSlide].classList.remove("is-active");
    currentSlide = (currentSlide + 1) % heroSlides.length;
    heroSlides[currentSlide].classList.add("is-active");
  }, 5600);
}

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.addEventListener("click", (event) => {
    if (event.target.matches("a")) {
      nav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { rootMargin: "0px 0px -8% 0px", threshold: 0.04 }
);

document.querySelectorAll(".reveal").forEach((element, index) => {
  element.style.transitionDelay = `${Math.min(index % 6, 5) * 55}ms`;
  revealObserver.observe(element);
});

window.setTimeout(() => {
  document.querySelectorAll(".reveal").forEach((element) => {
    const box = element.getBoundingClientRect();
    if (box.top < window.innerHeight && box.bottom > 0) {
      element.classList.add("is-visible");
    }
  });
}, 80);

function openContactModal() {
  if (!contactModal) return;
  lastFocusedElement = document.activeElement;
  contactModal.classList.add("is-open");
  contactModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  const firstLink = contactModal.querySelector("a");
  if (firstLink) firstLink.focus();
}

function closeContactModal() {
  if (!contactModal) return;
  contactModal.classList.remove("is-open");
  contactModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
    lastFocusedElement.focus();
  }
}

contactTriggers.forEach((trigger) => {
  trigger.addEventListener("click", openContactModal);
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", closeContactModal);
});

function openLightbox(button) {
  if (!lightbox || !lightboxImage || !lightboxCaption) return;
  const src = button.getAttribute("data-lightbox");
  const caption = button.getAttribute("data-caption") || "Pavers' Crete LLC project";
  lightboxImage.src = src;
  lightboxImage.alt = caption;
  lightboxCaption.textContent = caption;
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  if (lightboxClose) lightboxClose.focus();
}

function closeLightbox() {
  if (!lightbox || !lightboxImage || !lightboxCaption) return;
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImage.src = "";
  lightboxCaption.textContent = "";
  document.body.classList.remove("modal-open");
}

galleryButtons.forEach((button) => {
  button.addEventListener("click", () => openLightbox(button));
});

if (lightboxClose) {
  lightboxClose.addEventListener("click", closeLightbox);
}

if (lightbox) {
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) closeLightbox();
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  closeContactModal();
  closeLightbox();
  if (nav && nav.classList.contains("is-open")) {
    nav.classList.remove("is-open");
    if (navToggle) navToggle.setAttribute("aria-expanded", "false");
  }
});
