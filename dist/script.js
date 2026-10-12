const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");
const serviceMenuToggles = Array.from(document.querySelectorAll("[data-services-toggle]"));
const heroSlides = Array.from(document.querySelectorAll(".hero-bg"));
const heroDots = Array.from(document.querySelectorAll("[data-hero-dot]"));
const videoViewport = document.querySelector("[data-video-viewport]");
const videoTrack = document.querySelector("[data-video-track]");
const videoSlides = Array.from(document.querySelectorAll(".reel-slide"));
const videoPrev = document.querySelector("[data-video-prev]");
const videoNext = document.querySelector("[data-video-next]");
const videoCount = document.querySelector("[data-video-count]");
const galleryViewport = document.querySelector("[data-gallery-viewport]");
const galleryTrack = document.querySelector("[data-gallery-track]");
const gallerySlides = Array.from(document.querySelectorAll("[data-gallery-slide]"));
const galleryPrev = document.querySelector("[data-gallery-prev]");
const galleryNext = document.querySelector("[data-gallery-next]");
const galleryCount = document.querySelector("[data-gallery-count]");
const reviewViewport = document.querySelector("[data-review-viewport]");
const reviewTrack = document.querySelector("[data-review-track]");
const reviewSlides = Array.from(document.querySelectorAll("[data-review-slide]"));
const reviewPrev = document.querySelector("[data-review-prev]");
const reviewNext = document.querySelector("[data-review-next]");
const reviewCount = document.querySelector("[data-review-count]");
const comparisonSliders = Array.from(document.querySelectorAll("[data-comparison]"));
const typewriter = document.querySelector("[data-typewriter]");
const contactModal = document.querySelector("[data-modal]");
const closeModalButtons = Array.from(document.querySelectorAll("[data-close-modal]"));
const contactTriggers = Array.from(document.querySelectorAll(".contact-trigger"));
const lightbox = document.querySelector("[data-lightbox-modal]");
const lightboxImage = document.querySelector("[data-lightbox-image]");
const lightboxCaption = document.querySelector("[data-lightbox-caption]");
const lightboxClose = document.querySelector("[data-close-lightbox]");
const galleryButtons = Array.from(document.querySelectorAll("[data-lightbox]"));
const chatToggle = document.querySelector("[data-chat-toggle]");
const chatPanel = document.querySelector("[data-chat-panel]");
const chatClose = document.querySelector("[data-chat-close]");
const chatLog = document.querySelector("[data-chat-log]");
const chatSuggestions = document.querySelector("[data-chat-suggestions]");
const chatForm = document.querySelector("[data-chat-form]");
const chatInput = document.querySelector("[data-chat-input]");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

let currentSlide = 0;
let lastFocusedElement = null;
let slideTimer;

if (window.lucide) {
  window.lucide.createIcons();
}

const onScroll = () => {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 20);
};

window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

if (heroSlides.length > 1 && !prefersReducedMotion) {
  startHeroSlideshow();
}

function showHeroSlide(index) {
  if (!heroSlides.length) return;
  heroSlides[currentSlide].classList.remove("is-active");
  currentSlide = (index + heroSlides.length) % heroSlides.length;
  heroSlides[currentSlide].classList.add("is-active");
  heroDots.forEach((dot, dotIndex) => {
    const isActive = dotIndex === currentSlide;
    dot.classList.toggle("is-active", isActive);
    dot.setAttribute("aria-pressed", String(isActive));
  });
}

function startHeroSlideshow() {
  window.clearInterval(slideTimer);
  slideTimer = window.setInterval(() => showHeroSlide(currentSlide + 1), 5600);
}

function updateVideoCarousel() {
  if (!videoViewport || !videoTrack || !videoSlides.length) return;

  const gap = Number.parseFloat(window.getComputedStyle(videoTrack).columnGap) || 0;
  const step = videoSlides[0].getBoundingClientRect().width + gap;
  if (!step) return;

  const index = Math.max(0, Math.min(videoSlides.length - 1, Math.round(videoViewport.scrollLeft / step)));
  const visibleCount = Math.max(1, Math.floor((videoViewport.clientWidth + gap) / step));
  const lastVisible = Math.min(videoSlides.length, index + visibleCount);
  const formatIndex = (value) => String(value).padStart(2, "0");

  if (videoCount) {
    videoCount.textContent = `${formatIndex(index + 1)}-${formatIndex(lastVisible)} / ${formatIndex(videoSlides.length)}`;
  }
  if (videoPrev) videoPrev.disabled = videoViewport.scrollLeft <= 2;
  if (videoNext) {
    videoNext.disabled = videoViewport.scrollLeft + videoViewport.clientWidth >= videoViewport.scrollWidth - 2;
  }
}

function scrollVideoCarousel(direction) {
  if (!videoViewport || !videoTrack || !videoSlides.length) return;

  const gap = Number.parseFloat(window.getComputedStyle(videoTrack).columnGap) || 0;
  const step = videoSlides[0].getBoundingClientRect().width + gap;
  const visibleCount = Math.max(1, Math.floor((videoViewport.clientWidth + gap) / step));
  const advanceCount = Math.max(1, visibleCount - 1);

  videoViewport.scrollBy({
    left: direction * step * advanceCount,
    behavior: prefersReducedMotion ? "auto" : "smooth",
  });
}

if (videoViewport && videoTrack && videoSlides.length) {
  let videoScrollFrame = 0;
  videoViewport.addEventListener(
    "scroll",
    () => {
      if (videoScrollFrame) return;
      videoScrollFrame = window.requestAnimationFrame(() => {
        videoScrollFrame = 0;
        updateVideoCarousel();
      });
    },
    { passive: true }
  );
  window.addEventListener("resize", updateVideoCarousel);
  if (videoPrev) videoPrev.addEventListener("click", () => scrollVideoCarousel(-1));
  if (videoNext) videoNext.addEventListener("click", () => scrollVideoCarousel(1));
  videoViewport.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      scrollVideoCarousel(event.key === "ArrowLeft" ? -1 : 1);
    }
  });
  updateVideoCarousel();
}

function updateGalleryCarousel() {
  if (!galleryViewport || !galleryTrack || !gallerySlides.length) return;

  const gap = Number.parseFloat(window.getComputedStyle(galleryTrack).columnGap) || 0;
  const step = gallerySlides[0].getBoundingClientRect().width + gap;
  if (!step) return;

  const index = Math.max(0, Math.min(gallerySlides.length - 1, Math.round(galleryViewport.scrollLeft / step)));
  const visibleCount = Math.max(1, Math.floor((galleryViewport.clientWidth + gap) / step));
  const lastVisible = Math.min(gallerySlides.length, index + visibleCount);
  const formatIndex = (value) => String(value).padStart(2, "0");

  if (galleryCount) {
    galleryCount.textContent = `${formatIndex(index + 1)}-${formatIndex(lastVisible)} / ${formatIndex(gallerySlides.length)}`;
  }
  if (galleryPrev) galleryPrev.disabled = galleryViewport.scrollLeft <= 2;
  if (galleryNext) {
    galleryNext.disabled = galleryViewport.scrollLeft + galleryViewport.clientWidth >= galleryViewport.scrollWidth - 2;
  }
}

function scrollGalleryCarousel(direction) {
  if (!galleryViewport || !galleryTrack || !gallerySlides.length) return;

  const gap = Number.parseFloat(window.getComputedStyle(galleryTrack).columnGap) || 0;
  const step = gallerySlides[0].getBoundingClientRect().width + gap;
  const visibleCount = Math.max(1, Math.floor((galleryViewport.clientWidth + gap) / step));
  galleryViewport.scrollBy({
    left: direction * step * Math.max(1, visibleCount - 1),
    behavior: prefersReducedMotion ? "auto" : "smooth",
  });
}

if (galleryViewport && galleryTrack && gallerySlides.length) {
  let galleryScrollFrame = 0;
  galleryViewport.addEventListener(
    "scroll",
    () => {
      if (galleryScrollFrame) return;
      galleryScrollFrame = window.requestAnimationFrame(() => {
        galleryScrollFrame = 0;
        updateGalleryCarousel();
      });
    },
    { passive: true }
  );
  window.addEventListener("resize", updateGalleryCarousel);
  if (galleryPrev) galleryPrev.addEventListener("click", () => scrollGalleryCarousel(-1));
  if (galleryNext) galleryNext.addEventListener("click", () => scrollGalleryCarousel(1));
  galleryViewport.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      scrollGalleryCarousel(event.key === "ArrowLeft" ? -1 : 1);
    }
  });
  updateGalleryCarousel();
}

function updateReviewCarousel() {
  if (!reviewViewport || !reviewTrack || !reviewSlides.length) return;

  const gap = Number.parseFloat(window.getComputedStyle(reviewTrack).columnGap) || 0;
  const step = reviewSlides[0].getBoundingClientRect().width + gap;
  if (!step) return;

  const index = Math.max(0, Math.min(reviewSlides.length - 1, Math.round(reviewViewport.scrollLeft / step)));
  const visibleCount = Math.max(1, Math.floor((reviewViewport.clientWidth + gap) / step));
  const lastVisible = Math.min(reviewSlides.length, index + visibleCount);
  const formatIndex = (value) => String(value).padStart(2, "0");

  if (reviewCount) {
    reviewCount.textContent = `${formatIndex(index + 1)}-${formatIndex(lastVisible)} / ${formatIndex(reviewSlides.length)}`;
  }
  if (reviewPrev) reviewPrev.disabled = reviewViewport.scrollLeft <= 2;
  if (reviewNext) {
    reviewNext.disabled = reviewViewport.scrollLeft + reviewViewport.clientWidth >= reviewViewport.scrollWidth - 2;
  }
}

function scrollReviewCarousel(direction) {
  if (!reviewViewport || !reviewTrack || !reviewSlides.length) return;

  const gap = Number.parseFloat(window.getComputedStyle(reviewTrack).columnGap) || 0;
  const step = reviewSlides[0].getBoundingClientRect().width + gap;
  const visibleCount = Math.max(1, Math.floor((reviewViewport.clientWidth + gap) / step));
  reviewViewport.scrollBy({
    left: direction * step * Math.max(1, visibleCount - 1),
    behavior: prefersReducedMotion ? "auto" : "smooth",
  });
}

if (reviewViewport && reviewTrack && reviewSlides.length) {
  let reviewScrollFrame = 0;
  reviewViewport.addEventListener(
    "scroll",
    () => {
      if (reviewScrollFrame) return;
      reviewScrollFrame = window.requestAnimationFrame(() => {
        reviewScrollFrame = 0;
        updateReviewCarousel();
      });
    },
    { passive: true }
  );
  window.addEventListener("resize", updateReviewCarousel);
  if (reviewPrev) reviewPrev.addEventListener("click", () => scrollReviewCarousel(-1));
  if (reviewNext) reviewNext.addEventListener("click", () => scrollReviewCarousel(1));
  reviewViewport.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      scrollReviewCarousel(event.key === "ArrowLeft" ? -1 : 1);
    }
  });
  updateReviewCarousel();
}

comparisonSliders.forEach((comparison) => {
  const range = comparison.querySelector("[data-comparison-range]");
  if (!range) return;

  const updateComparison = () => {
    comparison.style.setProperty("--compare-position", `${range.value}%`);
    range.setAttribute("aria-valuetext", `${range.value}% of the before photo revealed`);
  };

  const updateFromPointer = (event) => {
    const bounds = comparison.getBoundingClientRect();
    if (!bounds.width) return;

    const position = Math.max(0, Math.min(100, ((event.clientX - bounds.left) / bounds.width) * 100));
    range.value = String(Math.round(position));
    updateComparison();
  };

  range.addEventListener("pointerdown", (event) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    event.preventDefault();
    range.focus({ preventScroll: true });
    range.setPointerCapture(event.pointerId);
    comparison.classList.add("is-dragging");
    updateFromPointer(event);
  });

  range.addEventListener("pointermove", (event) => {
    if (range.hasPointerCapture(event.pointerId)) updateFromPointer(event);
  });

  const stopDragging = (event) => {
    if (range.hasPointerCapture(event.pointerId)) range.releasePointerCapture(event.pointerId);
    comparison.classList.remove("is-dragging");
  };

  range.addEventListener("pointerup", stopDragging);
  range.addEventListener("pointercancel", stopDragging);
  range.addEventListener("lostpointercapture", () => comparison.classList.remove("is-dragging"));

  range.addEventListener("input", updateComparison, { passive: true });
  range.addEventListener("focus", () => comparison.classList.add("is-focused"));
  range.addEventListener("blur", () => comparison.classList.remove("is-focused"));
  updateComparison();
});

heroDots.forEach((dot) => {
  dot.addEventListener("click", () => {
    showHeroSlide(Number(dot.dataset.heroDot));
    startHeroSlideshow();
  });
});

if (typewriter && !prefersReducedMotion) {
  const phrases = (typewriter.dataset.phrases || "").split("|").filter(Boolean);
  let phraseIndex = 0;
  let characterIndex = phrases[0]?.length || 0;
  let deleting = false;

  function typeNextCharacter() {
    if (!phrases.length) return;
    const phrase = phrases[phraseIndex];
    typewriter.textContent = phrase.slice(0, characterIndex);
    if (!deleting && characterIndex === phrase.length) {
      deleting = true;
      window.setTimeout(typeNextCharacter, 1750);
      return;
    }
    if (deleting && characterIndex === 0) {
      deleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      window.setTimeout(typeNextCharacter, 240);
      return;
    }
    characterIndex += deleting ? -1 : 1;
    window.setTimeout(typeNextCharacter, deleting ? 34 : 68);
  }

  window.setTimeout(typeNextCharacter, 1200);
}

function closeMobileNav() {
  nav?.classList.remove("is-open");
  navToggle?.setAttribute("aria-expanded", "false");
  serviceMenuToggles.forEach((toggle) => {
    toggle.setAttribute("aria-expanded", "false");
    const menu = document.getElementById(toggle.getAttribute("aria-controls"));
    if (menu) menu.hidden = true;
  });
}

serviceMenuToggles.forEach((toggle) => {
  const menu = document.getElementById(toggle.getAttribute("aria-controls"));
  if (!menu) return;

  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    menu.hidden = isOpen;
  });
});

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    if (nav.classList.contains("is-open")) {
      closeMobileNav();
      return;
    }
    nav.classList.add("is-open");
    navToggle.setAttribute("aria-expanded", "true");
  });

  nav.addEventListener("click", (event) => {
    if (event.target.closest("a, .nav-cta")) closeMobileNav();
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

function openChat() {
  if (!chatPanel || !chatToggle) return;
  chatPanel.classList.add("is-open");
  chatPanel.setAttribute("aria-hidden", "false");
  chatToggle.setAttribute("aria-expanded", "true");
  document.body.classList.add("chat-open");
  if (chatInput) chatInput.focus();
}

function closeChat() {
  if (!chatPanel || !chatToggle) return;
  chatPanel.classList.remove("is-open");
  chatPanel.setAttribute("aria-hidden", "true");
  chatToggle.setAttribute("aria-expanded", "false");
  document.body.classList.remove("chat-open");
  chatToggle.focus();
}

function getFaqAnswer(question) {
  const value = question.toLowerCase().replace(/[’']/g, "").trim();

  if (/\b(price|pricing|cost|estimate|quote|budget)\b/.test(value)) {
    return "There isn't one price for every project. Cost depends on the area, site, materials, and work involved. Call or text (843) 251-8864 to discuss an estimate.";
  }
  if (/\b(how long|timeline|time|schedule|duration|days|weeks)\b/.test(value)) {
    return "The time needed depends on the project size, materials, site conditions, and scope. Contact the team with a few details to discuss scheduling.";
  }
  if (/\b(area|areas|location|locations|serve|service area|where)\b/.test(value)) {
    return "Service availability depends on location. Call or text the team with your city or ZIP code and they can confirm whether they can help.";
  }
  if (/\b(process|start|begin|first|steps)\b/.test(value)) {
    return "Start by sharing what you want to build and where. The team can talk through the site, materials, scope, and next steps for your project.";
  }
  if (/\b(review|reviews|rating|google)\b/.test(value)) {
    return "The Google review summaries mention punctuality, attention to detail, and cleanup. Use View on Google to read the original reviews.";
  }
  if (/\b(clean|cleanup|maintenance|maintain|sealing|seal)\b/.test(value)) {
    return "Care depends on the surface and materials. Ask the team about cleanup, sealing, and maintenance for the specific work at your property.";
  }
  if (/\b(contact|call|text|whatsapp|phone|human|person|talk)\b/.test(value)) {
    return "Call, text, or message Pavers' Crete LLC on WhatsApp at (843) 251-8864. Choose Contact the team below to pick an option.";
  }
  if (/\b(services?|pavers?|patios?|pools?|walkways?|concrete|retaining wall|steps?|install)\b/.test(value)) {
    return "The team installs paver patios, pool decks, walkways, steps, retaining walls, and concrete surfaces. Borders and finishing details can be part of the project too.";
  }

  return "I don't have that detail. Contact the team at (843) 251-8864 and choose WhatsApp, text, or call to ask about your project.";
}

function appendChatMessage(message, sender, includeReviewLink = false) {
  if (!chatLog) return;
  const article = document.createElement("article");
  article.className = `chat-message ${sender === "user" ? "is-user" : "is-bot"}`;
  const paragraph = document.createElement("p");
  paragraph.textContent = message;
  article.append(paragraph);

  if (sender === "bot") {
    if (includeReviewLink) {
      const reviewLink = document.createElement("a");
      reviewLink.className = "chat-review-link";
      reviewLink.href = "https://www.google.com/maps?cid=13667308921485443592";
      reviewLink.target = "_blank";
      reviewLink.rel = "noopener";
      reviewLink.textContent = "View on Google";
      article.append(reviewLink);
    }
    const contactButton = document.createElement("button");
    contactButton.className = "chat-contact-button";
    contactButton.type = "button";
    contactButton.dataset.chatContact = "";
    contactButton.textContent = "Contact the team";
    article.append(contactButton);
  }

  chatLog.append(article);
  chatLog.scrollTop = chatLog.scrollHeight;
}

function submitChatQuestion(question) {
  const cleanQuestion = question.trim();
  if (!cleanQuestion) return;
  appendChatMessage(cleanQuestion, "user");
  appendChatMessage(getFaqAnswer(cleanQuestion), "bot", /\b(review|reviews|rating|google)\b/i.test(cleanQuestion));
  if (chatSuggestions) chatSuggestions.hidden = true;
  if (chatInput) chatInput.value = "";
  if (chatInput) chatInput.focus();
}

if (chatToggle) chatToggle.addEventListener("click", openChat);
if (chatClose) chatClose.addEventListener("click", closeChat);

if (chatForm && chatInput) {
  chatForm.addEventListener("submit", (event) => {
    event.preventDefault();
    submitChatQuestion(chatInput.value);
  });
}

if (chatLog) {
  chatLog.addEventListener("click", (event) => {
    const questionButton = event.target.closest("[data-chat-question]");
    if (questionButton) submitChatQuestion(questionButton.dataset.chatQuestion);
    if (event.target.closest("[data-chat-contact]")) openContactModal();
  });
}

document.querySelectorAll("[data-chat-contact]").forEach((button) => {
  button.addEventListener("click", openContactModal);
});

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
  if (chatPanel && chatPanel.classList.contains("is-open")) closeChat();
  if (nav && nav.classList.contains("is-open")) {
    closeMobileNav();
  }
});
