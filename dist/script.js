const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");
const heroSlides = Array.from(document.querySelectorAll(".hero-bg"));
const heroDots = Array.from(document.querySelectorAll("[data-hero-dot]"));
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
    return "Every project is different, so pricing depends on the site, dimensions, materials, and scope. Contact the team to discuss your project and request an estimate.";
  }
  if (/\b(how long|timeline|time|schedule|duration|days|weeks)\b/.test(value)) {
    return "Project timing depends on the size, site conditions, materials, and scope. The team can discuss a schedule after learning more about your project.";
  }
  if (/\b(area|areas|location|locations|serve|service area|where)\b/.test(value)) {
    return "Please contact Pavers' Crete LLC to confirm availability for your project location.";
  }
  if (/\b(process|start|begin|first|steps)\b/.test(value)) {
    return "Projects typically begin with a conversation about the space and layout, followed by site preparation, installation, and a final cleanup and walkthrough.";
  }
  if (/\b(review|reviews|rating|google)\b/.test(value)) {
    return "Homeowners have highlighted the team's attention to detail, punctuality, clean work, and finished results. You can read the Google reviews directly.";
  }
  if (/\b(clean|cleanup|maintenance|maintain|sealing|seal)\b/.test(value)) {
    return "The right care depends on the surface and materials. Ask the team about cleanup, sealing, and maintenance options for your specific installation.";
  }
  if (/\b(contact|call|text|whatsapp|phone|human|person|talk)\b/.test(value)) {
    return "You can reach the team at (843) 251-8864. Choose Contact the team below to open WhatsApp, text, and call options.";
  }
  if (/\b(services?|pavers?|patios?|pools?|walkways?|concrete|retaining wall|steps?|install)\b/.test(value)) {
    return "Pavers' Crete LLC installs paver patios, pool decks, walkways, steps, retaining walls, and concrete surfaces. We can also help with borders and finishing details.";
  }

  return "I can help with services, estimates, project timing, service areas, and project care. For a specific question, use Contact the team and choose WhatsApp, text, or call.";
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
    nav.classList.remove("is-open");
    if (navToggle) navToggle.setAttribute("aria-expanded", "false");
  }
});
